function Footer() {
    return (
        <div className="flex items-center justify-center h-auto bg-customDarkBlue text-customCream border border-red-700 p-1">
            <div className="mt-12 flex flex-col items-center">
                <div className="flex items-center -ml-4">
                    <img 
                        src="/logo-light.svg" 
                        alt="Logo" 
                        className="h-24 mr-2"
                    />
                    <p className="font-montserrat font-semibold text-customCream text-4xl mt-3">Way Finder Edu</p>
                </div>
                <p className="font-montserrat font-medium text-customCream text-2xl text-center -mt-1">Everything is possible if we find a way.</p>
                <div className="flex items-center mt-7 mb-7 gap-x-8">
                    <a href="mailto:wayfinderedu.official@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img
                                src="/mail.svg"
                                alt="Email"
                                className="h-10 cursor-pointer"
                            /> 
                    </a>
                    <a href="https://wa.me/6287831687797" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/whatsapp.svg"
                            alt="WhatsApp"
                            className="h-9 cursor-pointer"
                        />
                    </a>
                    <a href="https://www.instagram.com/wayfinderedu" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/instagram.svg"
                            alt="Instagram"
                            className="-ml-1 h-10 cursor-pointer"
                        />
                    </a>
                </div>
                <p className="font-montserrat font-medium text-customCream text-md text-center mb-16">© 2024 Way Finder Edu. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;