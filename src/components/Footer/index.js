import React from "react"
import * as Styled from "./styled"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../Container"
import Grid from "../Grid"
import EmailLink from "../EmailLink"
import Image from "../Image"

export default () => {

    // Site metadata query

    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        contact {
                            email
                            github
                            instagram
                            linkedin
                            twitch
                            twitter
                        }
                    }
                }
            }    
        `
    )

    return (
        <Styled.Wrapper>
            <Container invertColors={true}>
                <Styled.Headshot>
                    <Image src="images/footer_headshot.jpg" alt="The author" />
                </Styled.Headshot>
                <Styled.Primary>
                    <Grid>
                        <div>
                            <h6>In case you missed it...</h6>
                            <p>I'm Aaron – a product designer living in Brooklyn, New York. Thanks for visiting.</p>
                            <Styled.LinkList>
                                <h5>
                                    <Link
                                        className="inverted"
                                        to="/info">
                                            More about me
                                    </Link>
                                </h5>
                            </Styled.LinkList>
                        </div>
                        <div>
                            <h6>Keep in touch</h6>
                            <p>I'm looking for my next full-time role. If you'd like to work together, say hi.*</p>
                            <Styled.LinkList>
                                <h5>
                                    <a className="inverted" href={data.site.siteMetadata.contact.twitter}>Twitter</a>
                                </h5>
                                <h5>
                                    <a className="inverted" href={data.site.siteMetadata.contact.instagram}>Instagram</a>
                                </h5>
                                <h5>
                                    <a className="inverted" href={data.site.siteMetadata.contact.github}>GitHub</a>
                                </h5>
                                <h5>
                                    <a className="inverted" href={data.site.siteMetadata.contact.twitch}>Twitch</a>
                                </h5>
                                <h5>
                                    <a className="inverted" href={data.site.siteMetadata.contact.linkedin}>LinkedIn</a>
                                </h5>
                                <h5>
                                    <EmailLink inverted={true} />
                                </h5>
                            </Styled.LinkList>
                        </div>
                    </Grid>
                </Styled.Primary>
                <Styled.Secondary>
                    <Grid>
                        <div>
                            <Styled.LinkList>
                                <h5>
                                    <Link
                                        className="inverted"
                                        to="/">
                                        Back home
                                    </Link>
                                </h5>
                                <h5>
                                    <a className="inverted" href="#top">Back to top</a>
                                </h5>
                            </Styled.LinkList>
                        </div>
                        <div>
                            <Styled.Footnote>* You can say hi for other reasons too.</Styled.Footnote>
                        </div>
                    </Grid>
                </Styled.Secondary>
            </Container>
        </Styled.Wrapper>
    )
}