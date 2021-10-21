const skills = document.querySelectorAll('#skills .item');

for (let skill of skills) {

    skill.addEventListener('click', (e) => {
        skillModal = skill.nextElementSibling
        skillModal.classList.remove('hidden')

        skillModal.addEventListener('click', (e) => {
            e.stopPropagation()
            if (e.target === skillModal) {
                skillModal.classList.add('hidden')
            }
        })
    })
}
