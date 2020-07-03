const faqsToggleButtons = document.querySelectorAll('.faqs__accordion button')
const faqsTabButtons = document.querySelectorAll('.faqs__content button')
const faqsTabContents = document.querySelectorAll('.tab-content')
const faqsContents = document.querySelectorAll('.faqs__accordion > p')

faqsToggleButtons.forEach((btn) =>
	btn.addEventListener('click', toggleAccordion)
)
faqsTabButtons.forEach((btn) => btn.addEventListener('click', toggleTabs))

function toggleAccordion(e) {
	e.target.nextElementSibling.classList.toggle('hidden')
	e.target.firstElementChild.classList.toggle('rotate')
}

function toggleTabs(e) {
	const tabId = e.target.dataset.tab
	faqsTabContents.forEach((content) => content.classList.add('hidden'))
	faqsTabButtons.forEach((btn) => btn.classList.remove('current'))
	document.getElementById(tabId).classList.toggle('hidden')
	e.target.classList.add('current')
}
