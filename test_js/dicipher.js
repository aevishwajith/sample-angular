var pass_decrypt = function(e) {
    var r = require("crypto"),
        t = "aes-256-ctr",
        a = "d6F3Efeqioni",
        c = r.createDecipher(t, a),
        i = c.update(e, "hex", "utf8");
    return i += c["final"]("utf8")
}
//fdf743eb9280ca xZ5ydAeFBE
var res=pass_decrypt('xZ5ydAeFBE');
console.log(res)