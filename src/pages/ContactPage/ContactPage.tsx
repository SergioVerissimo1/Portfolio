import Page from "../../components/Page/Page";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactPage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Overlay } from "react-bootstrap";
import { useRef, useState } from "react";
import { redirectTo } from "../../utils";
import ScrollToTop from "react-scroll-to-top";

const ContactPage = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const sendTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Page
      id="contact"
      content={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <PageTitle title="Contact" />
          </div>
          <div className={styles.subtitleContainer}>
            <p className={styles.subtitle}>
              Feel free to contact me by sending me an email and I will get back
              to you as soon as possible.
            </p>
          </div>
          <div className={styles.iconsContainer}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faLinkedin}
              onClick={() =>
                redirectTo(
                  "https://www.linkedin.com/in/s%C3%A9rgio-ver%C3%ADssimo-1bb652192/"
                )
              }
            />
            <FontAwesomeIcon
              className={styles.icon}
              icon={faGithub}
              onClick={() => redirectTo("https://github.com/SergioVerissimo1")}
            />
            <FontAwesomeIcon
              ref={target}
              className={styles.icon}
              icon={faEnvelope}
              onClick={() => {
                navigator.clipboard.writeText(
                  "sergio_verissimo_123@hotmail.com"
                );
                setShow(true);
                const timeoutId = setTimeout(() => setShow(false), 1000);
                // Cleanup function to clear the timeout if the component unmounts
                return () => clearTimeout(timeoutId);
              }}
            />
            <Overlay target={target.current} show={show} placement="top">
              {({
                placement: _placement,
                arrowProps: _arrowProps,
                show: _show,
                popper: _popper,
                hasDoneInitialMeasure: _hasDoneInitialMeasure,
                ...props
              }) => (
                <div
                  {...props}
                  style={{
                    position: "absolute",
                    backgroundColor: "var(--accent)",
                    padding: "5px 10px",
                    color: "var(--accent-foreground)",
                    borderRadius: 3,
                    ...props.style,
                  }}
                >
                  Copied to clipboard!
                </div>
              )}
            </Overlay>
          </div>
          <ScrollToTop
            smooth
            style={{ color: "var(--accent-on-light)", borderRadius: "100px" }}
            component={<FontAwesomeIcon icon={faArrowUp} />}
          />
        </div>
      }
    />
  );
};
export default ContactPage;
