import Link from 'next/link'

export default function CallToAction() {
    return (
        <div className='call-to-action-div container black'>
            <h1 className='title call-to-action-title'>Collaborate With Me</h1>
            < Link href='#contact' >
                < div className='button red call-to-action-button' >
                    Contact
                </div>
            </Link>
        </div>
    )
}