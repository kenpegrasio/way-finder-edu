function Footer() {
    return (
        <div className="flex items-center justify-center h-auto bg-custom-dark-blue text-custom-cream px-6 py-8 lg:px-24 lg:py-12">
            <div className="flex flex-col items-center px-4 md:px-0">
                <div className="flex grid-cols-2 items-center justify-center gap-2 lg:-ml-2">
                    <img 
                        src="/logo-light.svg" 
                        alt="Logo" 
                        className="lg:h-24 h-12"
                    />
                    <p className="font-montserrat font-semibold text-custom-cream text-2xl lg:text-4xl md:text-3xl pt-2 lg:pt-4">
                        Way Finder Edu
                    </p>
                </div>
                <p className="font-montserrat font-medium text-custom-cream md:text-xl text-center text-md lg:text-2xl lg:-mt-1">
                    Everything is possible if we find a way.
                </p>
                <div className="flex items-center py-4 gap-x-5 lg:py-6 lg:gap-x-8 md:gap-x-6 justify-center">
                    <a href="mailto:wayfinderedu.official@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/mail.svg"
                            alt="Email"
                            className="h-9 lg:h-12 cursor-pointer"
                        />
                    </a>
                    <a href="https://wa.me/6287831687797" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/whatsapp.svg"
                            alt="WhatsApp"
                            className="h-8 lg:h-11 cursor-pointer"
                        />
                    </a>
                    <a href="https://www.instagram.com/wayfinderedu" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/instagram.svg"
                            alt="Instagram"
                            className="h-9 lg:h-11 cursor-pointer"
                        />
                    </a>
                </div>
                <p className="font-montserrat font-medium text-custom-cream text-xs py-1 md:text-sm lg:py-2 lg:text-md text-center">
                    © 2024 Way Finder Edu. All Rights Reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;