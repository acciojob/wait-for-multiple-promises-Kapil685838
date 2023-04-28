//your JS code here. If required.

function randomPromise() {
	return new Promise((reject, resolve) => {
		let time = Math.floor(Math.random() * 3) + 1;
		setTimeout(() => {
			resolve(time);
		}, time * 1000);
	});
}

const promises = [randomPromise(), randomPromise(), randomPromise()];

Promise.all(promises)
	.then((res) => {
		const [time1, time2, time3] = res;
		const total = time1 + time2 + time3;
		const tableBody = document.getElementById('#output');
		tableBody.innerHTML = `
			<tr>
			   <td>Promise 1</td>
			   <td>${time1}</td>
			</tr>
			<tr>
			   <td>Promise 1</td>
			   <td>${time2}</td>
			</tr>
            <tr>
			   <td>Promise 1</td>
			   <td>${time3}</td>
			</tr>
			<tr>
			   <td>Promise 1</td>
			   <td>${total}</td>
			</tr>
		`;
	});