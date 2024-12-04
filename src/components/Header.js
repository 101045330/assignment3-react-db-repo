import React from 'react'

const Header = () => {
    return (
        <header className="container-fluid">
            <div className="row">
                {/* comment */}
                {/* Logo (20%) */}
                <section className="col-md-2 col-12">
                    <img src="logo.png" alt="Logo" className="img-fluid" />
                </section>

                {/* Chart (20%) */}
                <section className="col-md-2 col-12">
                    {/* Chart Placeholder */}
                    <div className="bg-light" style="height: 100px;">Chart</div>
                </section>

                {/* Heading Level 1 (60%) */}
                <section className="col-md-8 col-12">
                    <h1>Heading Level 1</h1>
                </section>
            </div>
        </header>
    )
}

export default Header