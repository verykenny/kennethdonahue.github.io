// const skills = document.querySelectorAll('#skills .item');

// for (let skill of skills) {

//     skill.addEventListener('click', (e) => {
//         skillModal = skill.nextElementSibling;
//         skillModal.style.visibility = 'visible';
//         skillModal.style.opacity = 1;

//         skillModal.addEventListener('click', (e) => {
//             e.stopPropagation();
//             if (e.target === skillModal) {
//                 skillModal.style.opacity = 0;
//                 setTimeout(() => skillModal.style.visibility = 'hidden', 300)

//             }
//         })
//     })
// }


const sites = document.querySelectorAll('#portfolio .item .image');

for (let site of sites) {

    site.addEventListener('click', (e) => {
        siteModal = site.parentElement.nextElementSibling;
        siteModal.style.visibility = 'visible';
        siteModal.style.opacity = 1;

        siteModal.addEventListener('click', (e) => {
            e.stopPropagation();
            if (e.target === siteModal) {
                siteModal.style.opacity = 0;
                setTimeout(() => siteModal.style.visibility = 'hidden', 300)

            }
        })
    })
}
