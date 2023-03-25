import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data"
export function Home() {

  const hanndleDownload = () => {
    // console.log("Download Brochure");
    fetch('http://localhost:3000/downloadbrochure',
    {
      method:"GET",
    }).then(Response => Response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "Brochure.pdf";
      link.click();
    })

  }


  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute -top-32 h-full w-full bg-[url('./img/teamwork.jpeg')] bg-cover" />
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black mt-64"
              >
              Your Learning Along with Us.
              </Typography>
              <Typography variant="h4" color="white" className="text-lg text-brown-100 md:text-4xl">
              The capacity to learn is a Gift <br />
              The ability to learn is a Skill<br />
              The willingness to learn is a Choice.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Learning with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500 text-xl">
                We strive to create an environment where our students can feel inspired 
                and motivated to explore new ideas, acquire new skills,and achieve their learning goals. 
                Our courses are designed to be engaging, interactive, and tailored to the needs of our students. 
                We use a variety of teaching methods, including video lectures, interactive exercises, and group discussions, to create a dynamic and stimulating learning experience.
                Our instructors are experts in their fields, and they are passionate about sharing their knowledge and expertise with our students. 
                <br />
                <br />
                We also provide personalized support and feedback to help our students succeed. 
                We believe that by making learning a pleasure, 
                we can help our students unlock their full potential and achieve their dreams. 
                <strong className="cursor-pointer text-blue-600">
                  Join us today and start your journey towards lifelong learning!
                </strong>
              </Typography>
              <Button onClick={hanndleDownload}>
              <span>
                Download Brochure
              </span>
              </Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/student.png"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold text-2xl"
                  >
                    Top Notch Learning Experience
                  </Typography>
                  <Typography className="font-semibold text-lg text-blue-gray-500">
                    We will help you to focus on what you want achieve 
                    and stay motivated throughout the course.Take Advantage og any discussion forums or
                    Q&A sessions offered by the course instructor to ask questions and clarify any doubts 
                    you may have. You can also interact with other students in the course to exchange ideas and get feedback.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Online Course Samples">
            Our Teaching Expert are ready to help you learn new Topics in Chemistry.
            Our Goal is to make a Craze for Chemistry in Students.
          </PageTitle>
          <div className="flex justify-center mt-16 text-blue-gray-500">
              <Typography className="font-extrabold text-xl md:text-2xl">CBSE</Typography>
              <div className="px-4 font-extrabold text-xl md:text-2xl">|</div>
              <Typography className="font-extrabold text-xl md:text-2xl">IIT JEE</Typography>
              <div className="px-4 font-extrabold text-xl md:text-2xl">|</div>
              <Typography className="font-extrabold text-xl md:text-2xl">NEET</Typography>
              <div className="px-4 font-extrabold text-xl md:text-2xl">|</div>
              <Typography className="font-extrabold text-xl md:text-2xl">JAM</Typography>
          </div>
          <div className="mt-24 w-full md:-ml-10 grid grid-cols-1 gap-12 md:gap-x-24 xl:gap-x-48 md:grid-cols-2 xl:grid-cols-3">
            {teamData.map(({ link, name, position }) => (
              <TeamCard
                key={name}
                link={link}
                name={name}
                position={position}
                />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Learn From Top Teaching Expert">
            Personalized guidance and support for recorded video courses.
            Great Mentorship and Support.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-300 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-600">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to Learn with us?">
            Complete this form and we will get back to you within 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={5} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
