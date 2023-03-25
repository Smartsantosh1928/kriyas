import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import React from "react";

const year = new Date().getFullYear();

export function Footer({ title, description,  socials, menus, copyright }) {
  return (
    <footer className="relative px-4 -mt-20 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center md:justify-center">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-center">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                    {name == "email" ? <span className="w-full h-full">✉</span> : (<i className={`fa-brands fa-${name}`} />) }
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Kriya's Academy",
  description:
    "Sign Of Excellence and Success.",
  socials: [
    {
      color: "red",
      name: "youtube",
      path: "https://www.youtube.com/@mahe.chemist402",
    },
    {
      color: "green",
      name : "whatsapp",
      path: "tel:+91 9442666074",
    },
    {
      color: "red",
      name: "email",
      path: "mailto:maheswarivaseekaran@gmail.com",
    }
  ],
  copyright: (
    <>
      Copyright © {year} Kriya's Academy{" "} By {" "} 
      <a
        href="https://www.unijactech.com"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Unijac Technologies
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
