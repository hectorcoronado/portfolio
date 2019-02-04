import React from 'react'

const links = [
    {
        anchorClass: 'contact-page__link contact-page__link--email-link',
        anchorHref: 'mailto:hectorcoronado.developer@gmail.com',
        fontAwesomeClass: 'fas fa-envelope-square'
    },
    {
        anchorClass: 'contact-page__link contact-page__link--github-link',
        anchorHref: 'https://github.com/hectorcoronado',
        fontAwesomeClass: 'fab fa-github-square'
    },
    {
        anchorClass: 'contact-page__link contact-page__link--twitter-link',
        anchorHref: 'https://twitter.com/HCoronado',
        fontAwesomeClass: 'fab fa-twitter-square'
    },
    {
        anchorClass: 'contact-page__link contact-page__link--linkedin-link',
        anchorHref: 'https://twitter.com/HCoronado',
        fontAwesomeClass: 'fab fa-linkedin'
    },
]

const linkItems = links.map(link => {
    return (
        <a key={link.fontAwesomeClass} className={link.anchorClass} href={link.anchorHref}>
            <i className={link.fontAwesomeClass} />
        </a>
    )
})

const ContactPageLinks = () => (
    <div className='contact-page contact-page__links'>
        {linkItems}
    </div>
)

export default ContactPageLinks