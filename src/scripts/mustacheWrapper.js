;
(function (__context) {
    var module = {
        id: "3a902f36e9df567fd7bbc3864312fdec",
        filename: "hogan.mustache",
        exports: {}
    };
    if (!__context.____MODULES) {
        __context.____MODULES = {};
    }
    var r = (function (exports, module , global )
    {

        if (typeof window.QTMPL === "undefined") {
            window.QTMPL = {};
        }

        window.QTMPL.hogan = new window.Hogan.Template(function (c, p, i) {

            var self = this;
            self.b(i = i || "");
            if (self.s(
                    self.f("persons", c, p, 1),
                    c, p, 0, 12, 123, "{{ }}"
                )
            ) {
                self.rs(c, p,
                    function (c, p, self) {
                        if (self.s(
                            self.f("isMale", c, p, 1), c, p, 0, 28, 56, "{{ }}"
                        )) {
                            self.rs(c, p, function (c, p, self) {
                                self.b("    Mr. ");
                                self.b(self.v(self.f("name", c, p, 0)));
                                self.b("  <br>");
                                self.b("\n");
                            });
                            c.pop();
                        }

                        if (self.s(
                            self.f("isFemale", c, p, 1), c, p, 0, 85, 109, "{{ }}"
                        )) {
                            self.rs(c, p, function (c, p, self) {
                                self.b("    Miss. ");
                                self.b(self.v(self.f("name", c, p, 0)));
                                self.b("\n");
                            });
                            c.pop();
                        }
                });
                c.pop();
            }

            self.b("\n" + i);
            self.b("\n");
            return self.fl();
            ;
        });

    }
    )
    ( module.exports , module , __context );
    __context.____MODULES[ "3a902f36e9df567fd7bbc3864312fdec" ] = module.exports;
})(this);