class Slider {

    _slider_elem;
    _btn_left;
    _btn_right;
    _img_num = 0;
    _img_count;

    _change;
    static _switch_modes = {
        'slide': Slider._slide,
        'switch': Slider._switch,
        'fade': Slider._fade,
    };

    locked = false;
    duration = 1000;

    constructor(slider_elem, _switch_mode = "slide", duration= 1000, btn_left = null, btn_right = null) {
        this._slider_elem = slider_elem;
        this._change = Slider._switch_modes[_switch_mode];
        this.duration = duration;

        if (btn_left === null || btn_right === null) {
            slider_elem.append("<img src='images/slider_arrow.png' alt='' class='slider_btn'>");
            slider_elem.append("<img src='images/slider_arrow.png' alt='' class='slider_btn'>");

            let slider_btns = $(".slider_btn");
            let left = slider_elem.find(slider_btns).first();
            let right = slider_elem.find(slider_btns).last();

            slider_elem.css('position', 'relative');
            left.css({'left' : 0});
            right.css({'right' : 0, 'transform': 'rotateZ(200grad)'});

            this._btn_left = left;
            this._btn_right = right;
        }

        this._images = slider_elem.find($(".slider_image"));
        this._img_count = this._images.length;
        this._images.hide();
        this._images.first().show();

        let inst = this;
        this._btn_left.click(function () {
            inst.slideLeft();
        });
        this._btn_right.click(function () {
            inst.slideRight();
        });
    }


    slideLeft() {
        this.setImage(this._img_num - 1, -1);
    }

    slideRight() {
        this.setImage(this._img_num + 1, 1);
    }

    // if dir negative - slide animate to left; if dir positive - slide animate to right;
    setImage(num, dir) {
        if (this.locked) return;
        if (num === this._img_count) {
            num = 0;
        }
        if (num === -1) {
            num = this._img_count - 1;
        }

        let from_elem = this._images.eq(this._img_num);
        let to_elem = this._images.eq(num);

        let inst = this;
        this.locked = true;
        this._change(from_elem, to_elem, dir,this.duration, function () {
            inst.locked = false;
        });
        this._img_num = num;
    }

    static _slide(from_elem, to_elem, dir, duration, complete) {
        to_elem.show();
        from_elem.css('position', 'absolute');
        to_elem.css('position', 'absolute');

        let from_elem_dir = 'left';
        let to_elem_dir = 'right';

        if (dir > 1) {
            from_elem_dir = "left";
            to_elem_dir = "right";
        }
        else if (dir < 0) {
            from_elem_dir = "right";
            to_elem_dir = "left";
        }

        let from_elem_css = {};
        from_elem_css[from_elem_dir] = "0";
        let to_elem_css = {};
        to_elem_css[to_elem_dir] = "-100%";

        to_elem.css(to_elem_css);
        to_elem_css[to_elem_dir] = '0';
        to_elem.animate(to_elem_css, {
            duration: duration,
            queue: false,
            easing: "swing",
            complete: function () {
                to_elem_css[to_elem_dir] = 'inherit';
                to_elem.css({'position': 'inherit'});
                to_elem.css(to_elem_css);
                complete();
            }
        });
        from_elem.css(from_elem_css);
        from_elem_css[from_elem_dir] = '-100%';
        from_elem.animate(from_elem_css, {
            duration: duration,
            queue: false,
            easing: "swing",
            complete: function () {
                from_elem_css[from_elem_dir] = 'inherit';
                from_elem.css({'position': 'inherit'});
                from_elem.css(from_elem_css);
                from_elem.hide();
            }
        });
    }

    static _switch(from_elem, to_elem, dir, duration, complete) {
        from_elem.hide();
        to_elem.show();
        complete();
    }

    static _fade(from_elem, to_elem, dir, duration, complete) {
        to_elem.css('opacity', '0');
        to_elem.show();

        from_elem.css('position', 'absolute');
        to_elem.css('position', 'absolute');

        to_elem.animate({'opacity': '1'}, {
            duration: duration,
            queue: false,
            easing: "swing",
            complete: function () {
                from_elem.css({'position': 'inherit'});
                complete();
            }
        });

        from_elem.animate({'opacity': '0'}, {
            duration: duration,
            queue: false,
            easing: "swing",
            complete: function () {
                from_elem.hide();
                from_elem.css({'opacity': 'inherit', 'position': 'inherit'});
            }
        })
    }
}