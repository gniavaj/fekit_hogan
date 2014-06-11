function (c, p, i) {
    var _ = this;
    _.b(i = i || "");
    if (_.s(_.d("pctx.name", c, p, 1), c, p, 0, 14, 28, "{{ }}")) {
        _.rs(c, p, function (c, p, _) {
            _.b("    ");
            _.b(_.v(_.f("name", c, p, 0)));
            _.b("\n");
        });
        c.pop();
    }
    return _.fl();
    ;
}