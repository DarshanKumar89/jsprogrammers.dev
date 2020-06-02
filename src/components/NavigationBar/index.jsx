import Container from "../Container"
import DevLogo from "../../images/devto.svg"
import DribbbleLogo from "../../images/dribbble.svg"
import GitHubLogo from "../../images/github-logo.svg"
import IconButton from "../IconButton";
import { Link } from 'gatsby';
import React from "react"
import styles from "./styles.module.scss"

export default function NavigationBar({
  enableBackButton = false,
  title = "JS.programmers.dev",
  to = "/"
}) {
  const links = [
    {
      title: "Dev.to",
      url: "https://dev.to/darshaneldorado",
      icon: DevLogo,
    },
    {
      title: "Github",
      url: "https://github.com/darshankumar89",
      icon: GitHubLogo,
    },
    // {
    //   title: "Dribbble",
    //   url: "https://dribbble.com/darshaneldorado",
    //   icon: DribbbleLogo,
    // },
  ]

  return (
    <div className={styles.navigationWrapper}>
      <Container>
        <div className={styles.navigationBar}>
          {enableBackButton ? (
            <Link to={to}>
              <IconButton onClick={() => {}}>arrow_back</IconButton>
            </Link>
          ) : (
            <></>
          )}
          <h3>{title}</h3>
          <div className="flex-expand"></div>
          {links.map(link => {
            return (
              <a
                href={link.url}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.logoButton}
                  src={link.icon}
                  alt={link.title}
                />
              </a>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
