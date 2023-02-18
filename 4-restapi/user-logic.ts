import _mock from "./mock_users.json" assert { type: "json" };

export function getAll() {
	console.log("USERS");
	return _mock;
}

export function searchBy(id: number) {
	console.log("FIND BY ", id);
	const found = _mock.find(user => user.id === id);
	return found;
}
