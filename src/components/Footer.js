import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-dark text-light py-4 mt-5">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col fs-2 fw-bold text-center my-4">
                                <h3>𝓝𝓮𝔀𝓼𝓗𝓸𝓷𝓮𝓼𝓽𝔂</h3>
                                <p className="col fs-6 text-center">latest and trending news</p>
                            </div>
                            <div className="col my-5 mdd-flexd-flex gap-3 fs-6">
                                <Link to="#" className="text-light" ><i className="bi bi-facebook">About us</i></Link>
                                <Link to="#" className="text-light"><i className="bi bi-facebook">Contect us</i></Link>
                            </div>
                            <div className="col fs-6 fw-bold ">
                                <h3>𝔽𝕠𝕝𝕝𝕠𝕨 𝕌𝕤</h3>
                                <Link to="#" className="text-light link-info"><i className="bi bi-facebook">facebook</i></Link><br />
                                <Link to="#" className="text-light link-info"><i className="bi bi-twitter-x">twitter</i></Link><br />
                                <Link to="#" className="text-light link-info"><i className="bi bi-instagram">instagram</i></Link><br />
                                <Link to="#" className="text-light link-info"><i className="bi bi-linkedin">linkedin</i></Link><br />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3 small text-secondary">
                        &copy; 2025 News-Honesty. All Rights Reserved.
                    </div>
                </footer>

            </div>
        )
    }
}

export default Footer
