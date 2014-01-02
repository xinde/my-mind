MM.Backend.Local = Object.create(MM.Backend, {
	label: {value: "Browser storage"},
	id: {value: "local"},
	prefix: {value: "mm.map."}
});

MM.Backend.Local.save = function(data, id, name) {
	localStorage.setItem(this.prefix + id, data);

	var names = this.list();
	names[id] = name;
	localStorage.setItem(this.prefix + "names", JSON.stringify(names));
}

MM.Backend.Local.load = function(id) {
	return localStorage.getItem(this.prefix + id);
}

MM.Backend.Local.list = function() {
	try {
		var data = localStorage.getItem(this.prefix + "names") || "{}";
		return JSON.parse(data);
	} catch (e) {
		return {};
	}
}
