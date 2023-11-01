import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
const Footer = () => {
  return (
    <div className="footer">
      <div className="foot_head">
        <img
          src="	https://www.masaischool.com/images/footer/arrow-gif.gif"
          alt="right"
        />
        <h2>
          <span className="foot_span1">Get Started</span>
          <span className="foot_span2">Join the Program</span>
        </h2>
        <div className="view_all_courses_btn">
          <button className="home_third_buttonn">GET YOUR DREAM JOB</button>
        </div>
      </div>
      <div className="foot_sub_boss">
        <div className="foot_sub_head">
          <div>
            <img
              src="https://www.masaischool.com/images/footer/masai-logo-dark.svg"
              alt="logo"
            />
          </div>
          <div className="foot_social">
            <p>FOLLOW US -</p>
            <a href="https://twitter.com/masaischool" className="social-icon" id="twitter">
              <svg>
                <TwitterIcon color="disabled" sx={{ fontSize: 40 }} />
              </svg>
            </a>
            <a href="https://www.facebook.com/masaischool/" className="social-icon" id="facebook">
              <svg>
                <FacebookIcon color="disabled" sx={{ fontSize: 40 }} />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/masai-school/" className="social-icon" id="linkedin">
              <svg>
                <LinkedInIcon color="disabled" sx={{ fontSize: 40 }} />
              </svg>
            </a>
            <a href="https://www.instagram.com/masaischool/" className="social-icon" id="instagram">
              <svg>
                <InstagramIcon color="disabled" sx={{ fontSize: 40 }} />
              </svg>
            </a>
            <a href="https://github.com/masai-school" className="social-icon" id="github">
              <svg>
                <GitHubIcon color="disabled" sx={{ fontSize: 40 }} />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCENOACKQiqejXP-bb9sCnMg?view_as=subscriber" className="social-icon" id="youtube">
              <svg>
                <YouTubeIcon color="disabled" sx={{ fontSize: 40 }} />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="foot_last">
        <div className="foot_last1">
          <ul>
            <a href="https://www.masaischool.com/success-stories">
              <li>Success Stories</li>
            </a>
            <a href="https://www.masaischool.com/teams">
              <li>Our Team</li>
            </a>
            <a href="https://www.masaischool.com/careers">
              <li>careers</li>
            </a>
            <a href="https://www.masaischool.com/blog/">
              <li>Masai Blog</li>
            </a>
            <a href="https://www.masaischool.com/talent-circle">
              <li>Talent Circle</li>
            </a>
            <a href="https://www.masaischool.com/msat">
              <li>Masai School Admissions Test (MSAT)</li>
            </a>
          </ul>
        </div>
        <div className="foot_last2">
          <ul>
            <a href="https://www.masaischool.com/hire-masai-graduates">
              <li>Hire From Us</li>
            </a>
            <a href="https://www.masaischool.com/our-investors">
              <li>Our Investors</li>
            </a>
            <a href="https://www.masaischool.com/media?page=1">
              <li>Newsroom</li>
            </a>
            <a href="https://www.masaischool.com/contact">
              <li>Contact Us</li>
            </a>
            <a href="https://www.masaischool.com/become-coach">
              <li>Become Coach</li>
            </a>
          </ul>
        </div>
        <div className="foot_last3">
          <ul>
            <a href="https://www.masaischool.com/about">
              <li>About Us</li>
            </a>
            <a href="https://www.masaischool.com/faq">
              <li>FAQ</li>
            </a>
            <a href="https://www.masaischool.com/referral">
              <li>Referral Program</li>
            </a>
            <a href="https://masaischool.com/learn">
              <li>Masai Learn</li>
            </a>
            <a href="https://www.masaischool.com/industry-mentors">
              <li>Industry Mentors</li>
            </a>
          </ul>
        </div>
        <div className="foot_last4">
          <p>Connect with a growing</p>
          <p>community of learners</p>
          <a href="https://telegram.me/masaitribe" className="foot_last_btn">
            <svg id="telegram">
              <TelegramIcon color="white" />
            </svg>
            JOIN OUR TELEGRAM
          </a>
        </div>
      </div>
      <div className="foot_copyright_boss">
        <div className="foot_copyright">
          <p>© 2023 by Masai School | A Nolan Edutech Pvt Ltd Venture</p>
          <div>
            <a href="https://www.masaischool.com/privacy">Privacy policy</a> & <a href="https://www.masaischool.com/terms">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
