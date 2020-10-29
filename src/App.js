import React from 'react';

/** styles */
import styles from './App.module.css';

/** assets */
import couch from './couch.png';
import data from './product.json';

function App() {
	const [productData, setProductData] = React.useState({})
	const [quantity, setQuantity] = React.useState(1)

	React.useEffect(() => {
		// fetch data simulate
		setProductData(data);
	}, [productData]);

	function quantityNumbers() {
		let numbers = [];
		for(let i = 1; i <= 20; i++) {
			numbers.push(i);
		};

		return numbers;
	}

	function handleClick() {
		console.log({
			productId: productData.id,
			price: productData.price,
			quantity,
		})
	}


	return (
		<div className={styles.app}>
			<img className={styles.img} src={couch} alt="logo" />
			<div className={styles.info}>
				<h1 className={styles.name}>{productData.name}</h1>
				<div className={styles.brand}>Brand - <a href={productData.brandUrl}>{productData.brandName}</a></div>
				<div className={styles.price}><b>Today - ${productData.price}</b></div>
				<div className={styles.description}><b>Description: </b>{productData.description}</div>
				<select
					onChange={e => setQuantity(Number(e.target.value))}
					value={quantity}
					className={styles.select}
				>
					{quantityNumbers().map((num) => {
						return (
							<option value={num}>
								Quantity: {num}
							</option>
						)
					})}
				</select>
				<button
					onClick={handleClick}
					className={styles.button}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
}

export default App;
