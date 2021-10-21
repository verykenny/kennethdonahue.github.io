const skills = document.querySelectorAll('#skills .item');

for (let skill of skills) {

    skill.addEventListener('click', (e) => {
        skillModal = skill.nextElementSibling;
        skillModal.style.visibility = 'visible';
        skillModal.style.opacity = 1;

        skillModal.addEventListener('click', (e) => {
            e.stopPropagation();
            if (e.target === skillModal) {
                skillModal.style.opacity = 0;
                setTimeout(() => skillModal.style.visibility = 'hidden', 500)

            }
        })
    })
}
