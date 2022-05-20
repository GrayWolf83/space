export const clearHoveredClasses = () => {
	const items = document.querySelectorAll('.home__inner-item')
	items.forEach((item) => item.classList.remove('hovered'))
}
