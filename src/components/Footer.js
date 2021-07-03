function Footer() {

    let date = new Date();
    return (

        <div>
            <div>
                <hr />
                <div className="text-center footer lh-lg"> {date.getFullYear()} © Tiny Books Store</div>

            </div>

        </div>
    )
}

export default Footer;