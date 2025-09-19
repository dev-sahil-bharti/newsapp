import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="row mb-1">
                        <div className="col text-center">
                            <h2 className="fw-bold">About Us</h2>
                            <p className="text-muted">
                                Welcome to News-Honesty – Your Daily Source of Trusted News.
                            </p>
                        </div>
                    </div>

                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    intro
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    At News-Honesty, we believe that staying informed should be simple, reliable, and engaging. Our mission is to bring you the latest breaking news, top stories, and in-depth analysis from around the world – all in one place.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    We cover a wide range of categories including
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    🏛 Politics & Governance – Updates on national and international affairs.<br />
                                    💹 Business & Economy – Market trends, startup stories, finance tips.<br />
                                    ⚽ Sports – Live scores, match highlights, and exclusive coverage.<br />
                                    🎬 Entertainment & Lifestyle – Movies, celebrities, fashion, and culture.<br />
                                    💡 Technology & Innovation – AI, gadgets, and digital trends.<br />
                                    🌍 World News – Global headlines at your fingertips.<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </>
        )
    }
}

export default About
