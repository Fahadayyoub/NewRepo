import React from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Button,
  TextArea,
  Heading,
  Input,
  Img,
  Slider,
} from "../../components";
import { Link } from "react-router-dom";

export default function HomepageFourPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef(null);
  const [sliderState3, setSliderState3] = React.useState(0);
  const sliderRef3 = React.useRef(null);
  const [sliderState4, setSliderState4] = React.useState(0);
  const sliderRef4 = React.useRef(null);
  const testimonials = [
    {
      heading: "Sofia",
      subHeading: "Post Construction Client",
      content:
        "'We were amazed at the transformation after CareClean's post-construction clean-up. Our project was completed with such care and precision; it was as if the construction phase never happened. Would definitely recommend CareClean for post-construction services.",
    },
    {
      heading: "Andre",
      subHeading: "Building Manager",
      content:
        "As the building manager for a large strata property, finding a cleaning service that meets our diverse needs was challenging until we discovered CareClean. Their team consistently delivers high-quality, thorough cleaning services that keep our common areas, amenities, and individual units in immaculate condition, which has noticeably improved our residents' satisfaction and well-being.",
    },
  ];
  const handleClick = () => {
    console.log("Fahad");
  };

  const images = [
    "images/img_image_674x457.png",
    "images/img_image_665x466.png",
    "images/img_image_665x458.png",
  ];
  return (
    <>
      <Helmet>
        <title>Muhammad's Application</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full pb-11 md:pb-5 bg-white-A700 shadow-sm">
        <div>
          <div>
            <div className="flex flex-col items-end overflow-auto">
              <div className="self-stretch w-full mx-auto md:p-5 max-w-[1462px]">
                <div className="mt-2">
                  <div className="h-[4px] z-[1] bg-white-A700" />
                  <div className="h-[793px] mt-[-4px] relative">
                    <div className="flex flex-col justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img
                        src="images/img_image_8.png"
                        alt="imageeight_one"
                        className="w-[11%] ml-[11px] z-[1] object-cover"
                      />
                      <div className="flex mt-[-106px] py-[21px] sm:py-5 bg-white-A700">
                        <div className="flex flex-col items-end w-[77%] mt-[85px]">
                          <div className="flex md:flex-col self-stretch justify-between items-start mr-[183px] gap-5">
                            <div className="w-[41%] md:w-full">
                              <div className="flex flex-col items-center">
                                <Img
                                  src="images/img_image_1.png"
                                  alt="imageone_one"
                                  className="self-stretch h-[359px] w-full object-cover"
                                />
                                <div className="flex w-[83%] md:w-full mt-[-50px] p-[3px] border-gray-300 border border-solid bg-white-A700 shadow-xs rounded-[12px]">
                                  <div className="w-full mt-1.5 ml-1">
                                    <div className="flex items-start gap-[7px]">
                                      <Img
                                        src="images/img_image.png"
                                        alt="image_one"
                                        className="w-[20%] object-cover"
                                      />
                                      <div className="flex flex-col gap-1.5 flex-1">
                                        <div className="flex items-center gap-[21px]">
                                          <Text size="s" as="p">
                                            Matthew L.
                                          </Text>
                                          <Text
                                            size="xs"
                                            as="p"
                                            className="self-start !text-gray-500"
                                          >
                                            13.02.2024
                                          </Text>
                                        </div>
                                        <Text
                                          size="s"
                                          as="p"
                                          className="!leading-[22px]"
                                        >
                                          CareClean&#39;s professional team not
                                          only left our office space sparkling
                                          clean but also significantly uplifted
                                          our team&#39;s productivity.
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center w-[46%] md:w-full mt-[3px]">
                              <Heading
                                size="2xl"
                                as="h1"
                                className="!text-teal-900_03"
                              >
                                CareClean
                              </Heading>
                              <Text
                                size="2xl"
                                as="p"
                                className="mt-[18px] !text-blue_gray-500 text-center !font-normal !leading-9"
                              >
                                Your one-stop-shop for residential,
                                post-construction, office cleaning, and more.
                              </Text>
                              <Button
                                color="teal_900_01"
                                size="md"
                                shape="round"
                                className="mt-[50px] sm:px-5 min-w-[323px]"
                                onClick={(e) => {
                                  const targetElement =
                                    document.getElementById("linkToDiv");
                                  const { top, left } =
                                    targetElement.getBoundingClientRect();
                                  window.scrollTo({
                                    top: top - 40,
                                    behavior: "smooth",
                                  });
                                }}
                              >
                                GET IN TOUCH
                              </Button>
                            </div>
                          </div>
                          <div className="flex md:flex-col justify-between w-[75%] md:w-full mt-[27px] mr-[54px] gap-5">
                            <div className="flex self-end justify-center items-start mt-[3px] gap-[21px]">
                              <Img
                                src="images/img_stack_1.svg"
                                alt="stackone_one"
                                className="h-[48px] w-[48px]"
                              />
                              <Heading
                                size="md"
                                as="h2"
                                className="mt-0.5 !text-teal-900_01"
                              >
                                Our Mission
                              </Heading>
                            </div>
                            <div className="flex self-start justify-center items-center gap-[21px]">
                              <Img
                                src="images/img_stack_1.svg"
                                alt="stackone_three"
                                className="h-[48px] w-[48px]"
                              />
                              <Heading
                                size="md"
                                as="h3"
                                className="self-end !text-teal-900_01"
                              >
                                Services Offered
                              </Heading>
                            </div>
                          </div>
                          <div className="flex md:flex-col justify-between items-start w-[74%] md:w-full gap-5">
                            <div className="flex justify-between items-start w-[46%] md:w-full gap-5">
                              <div className="h-[102px] w-[4px] mt-[5px] bg-blue_gray-200" />
                              <Text
                                size="xl"
                                as="p"
                                className="w-[86%] !text-blue_gray-500"
                              >
                                To enrich lives through clean living spaces,
                                believing in the power of a spotless environment
                                to bring peace, health, and joy to our
                                community.
                              </Text>
                            </div>
                            <div className="flex justify-between items-start w-[45%] md:w-full mt-[5px] gap-5">
                              <div className="h-[102px] w-[4px] bg-blue_gray-200" />
                              <Text
                                size="xl"
                                as="p"
                                className="w-[87%] !text-blue_gray-500"
                              >
                                <>
                                  Residential Cleaning
                                  <br />
                                  Post-Construction Cleaning
                                  <br />
                                  Office Cleaning
                                  <br />
                                  More
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_rectangle_4.png"
                      alt="image_two"
                      className="h-[359px] w-[25%] right-0 top-[12%] m-auto object-cover absolute"
                    />
                    <div className="flex flex-col items-center w-[27%] right-0 top-[12%] m-auto absolute">
                      <Img
                        src="images/img_image_383x383.png"
                        alt="image_four"
                        className="h-[383px] w-full md:w-[383px] object-cover rounded-[12px]"
                      />
                      <div className="flex justify-center w-[82%] md:w-full mt-[-66px] pt-2 px-2 border-gray-300 border border-solid bg-white-A700 shadow-xs rounded-[12px]">
                        <div className="flex justify-center items-start w-full gap-1.5">
                          <Img
                            src="images/img_image_6.png"
                            alt="imagesix_one"
                            className="w-[18%] object-cover"
                          />
                          <div className="flex flex-col mt-1.5 gap-1.5 flex-1">
                            <div className="flex items-center gap-2">
                              <Text size="s" as="p">
                                Mohammad K.
                              </Text>
                              <Text
                                size="xs"
                                as="p"
                                className="self-start !text-gray-500"
                              >
                                22.02.2023
                              </Text>
                            </div>
                            <Text size="xs" as="p" className="!leading-5">
                              Post-construction clean-up seemed like a big task
                              until CareClean stepped in. Their efficient and
                              thorough cleaning services allowed us to enjoy our
                              new space.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://dashboard.stripe.com/billing"
                className="mt-[-32px] mr-[18px] z-[1] min-w-[86px] rounded-[16px]"
                color="teal_900_01"
                size="xs"
              >
                <Button
                  color="teal_900_01"
                  size="xs"
                  className="mt-[-32px] mr-[18px] z-[1] min-w-[86px] rounded-[16px]"
                >
                  Admin Login
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center w-full gap-[62px] px-14 py-[74px] mx-auto md:p-5 bg-gray-50 max-w-[1431px]">
            <Heading
              size="xl"
              as="h2"
              className="mt-[9px] !text-teal-900 text-center"
            >
              Why CareClean
            </Heading>
            <div className="flex justify-center w-[95%] md:w-full mb-[76px]">
              <div className="flex md:flex-col justify-between items-start w-full gap-5">
                <div className="flex flex-col w-[43%] md:w-full mt-[3px] gap-[13px]">
                  <div className="flex sm:flex-col justify-center gap-[11px]">
                    <div className="h-[172px] w-[33%] pt-[7px] pl-[7px] bg-teal-900 relative rounded-[20px]">
                      <Heading
                        size="s"
                        as="h3"
                        className="w-[59%] left-[8%] top-[4%] m-auto !text-white-A700 !leading-9 absolute"
                      >
                        <>
                          Budget <br />
                          Friendly
                        </>
                      </Heading>
                      <div className="w-[86%] bottom-0 right-0 m-auto absolute">
                        <div>
                          <div>
                            <div>
                              <div>
                                <div
                                  className="h-[172px] relative"
                                  style={{ overflow: "hidden" }}
                                >
                                  <Img
                                    src="images/BudgetFriendly.svg"
                                    alt="vector_fifteen"
                                    className=" h-[172px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    style={{ right: -60, top: 80 }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center pt-[19px] gap-[22px] px-[19px] bg-gray-300 flex-1 rounded-[20px]">
                      <Heading size="s" as="h4" className="!text-gray-900">
                        Consistent & Dependable
                      </Heading>
                      <Img
                        src="images/img_image_110.svg"
                        alt="image110_three"
                        className="h-[100px]"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col justify-center gap-[11px]">
                    <div className="flex flex-col items-start pt-[15px] gap-[21px] px-[15px] bg-gray-300 flex-1 rounded-[20px]">
                      <Heading
                        size="s"
                        as="h5"
                        className="mt-[5px] !text-gray-900"
                      >
                        Performance Guarantee
                      </Heading>
                      <Img
                        src="images/img_image_111.svg"
                        alt="image111_three"
                        className="h-[100px] ml-[140px]"
                      />
                    </div>
                    <div className="flex flex-col items-center w-[33%] sm:w-full pt-[5px] pl-[5px] bg-teal-900 rounded-[20px]">
                      <Heading
                        size="s"
                        as="h6"
                        className="w-[87%] md:w-full !text-white-A700 !leading-9"
                      >
                        Available 24.7
                      </Heading>
                      <Img
                        src="images/img_image_112.svg"
                        alt="image112_three"
                        className="h-[95px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center w-[51%] md:w-full gap-[23px]">
                  <Heading
                    size="md"
                    as="h2"
                    className="!text-teal-900 text-center"
                  >
                    Testimonials
                  </Heading>
                  <div className="w-full">
                    <div
                      className="flex justify-end p-2 mx-auto bg-white-A700 rounded-[12px]"
                      style={{ padding: "0px 35px 0px 50px" }}
                    >
                      <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={{
                          0: { items: 1 },
                          550: { items: 1 },
                          1050: { items: 1 },
                        }}
                        disableDotsControls
                        activeIndex={sliderState3}
                        onSlideChanged={(e) => {
                          setSliderState3(e?.item);
                        }}
                        ref={sliderRef3}
                        className="self-stretch"
                        items={testimonials.map((item) => (
                          <React.Fragment key={Math.random()}>
                            <div className=" items-center mt-[29px] mb-9">
                              <Text size="2xl" as="p" className="text-center">
                                {item.heading}
                              </Text>
                              <Text
                                as="p"
                                className="mt-[7px] text-center !font-light"
                              >
                                {item.subHeading}
                              </Text>

                              <div className="self-stretch h-[156px] mt-[23px] relative">
                                <Text
                                  as="p"
                                  className="justify-center left-0 bottom-0 right-0 top-0 m-auto text-center !leading-[26px] absolute"
                                >
                                  {item.content}
                                </Text>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full p-[43px] mx-auto md:p-5 bg-white-A700 max-w-[1433px]">
            <div className="flex md:flex-col items-center w-[93%] mt-14 ml-[21px] gap-11">
              <div className="w-[47%] md:w-full">
                <div className="flex flex-col" id="linkToDiv">
                  <Heading
                    size="lg"
                    as="h2"
                    className="ml-[61px] !text-gray-900 !font-montserrat"
                  >
                    Get In Touch
                  </Heading>
                  <Text
                    size="lg"
                    as="p"
                    className="ml-[61px] !text-gray-900 !font-montserrat"
                  >
                    Return Communication In 24 Hrs Or Less, Guaranteed
                  </Text>
                  <div
                    className="flex sm:flex-col items-center mt-[19px] "
                    style={{ flexDirection: "row", width: "500px" }}
                  >
                    <Img
                      src="images/img_arrow_left.svg"
                      alt="arrowleft_five"
                      className="h-[44px] w-[44px]"
                      onClick={(e) => sliderRef?.current?.slidePrev(e)}
                    />
                    <div className="w-full">
                      <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={{
                          0: { items: 1 },
                          550: { items: 1 },
                          1050: { items: 1 },
                        }}
                        disableDotsControls
                        activeIndex={sliderState}
                        onSlideChanged={(e) => {
                          setSliderState(e?.item);
                        }}
                        ref={sliderRef}
                        className="bg-gray-300 flex-1"
                        items={images.map((item) => (
                          <React.Fragment key={Math.random()}>
                            <Img
                              src={item}
                              alt="image_one"
                              className="h-[665px] mx-auto object-cover"
                            />
                          </React.Fragment>
                        ))}
                      />
                    </div>
                    <Img
                      src="images/img_arrow_left.svg"
                      alt="arrowleft_five"
                      className="h-[44px] w-[44px]"
                      onClick={(e) => sliderRef?.current?.slideNext(e)}
                      style={{ transform: "rotate(180deg)" }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="flex flex-col self-stretch justify-center gap-[3px]">
                  <Heading as="h3" className="mt-0.5">
                    Name
                  </Heading>
                  <Input
                    shape="round"
                    name="name"
                    placeholder="Input text"
                    className="sm:pr-5"
                  />
                </div>
                <div className="flex flex-col self-stretch justify-center mt-8 gap-0.5">
                  <Heading as="h4" className="mt-[3px]">
                    Email / Phone Number
                  </Heading>
                  <Input
                    shape="round"
                    name="phoneNumber"
                    placeholder="Input text"
                    className="sm:pr-5"
                  />
                </div>
                <Heading as="h5" className="self-start mt-9">
                  Job Description
                </Heading>
                <TextArea
                  shape="round"
                  name="resizing_handle"
                  placeholder="Please share what you want us to help"
                  className="flex self-stretch mt-0.5 gap-[35px] text-blue_gray-200"
                />
                <Button shape="round" className="w-full mt-[23px] sm:px-5">
                  Submit
                </Button>
                <Text as="p" className="flex mt-[31px] !font-montserrat italic">
                  <span className="text-gray-900">
                    Designed & Developed by{" "}
                  </span>
                  <span className="text-gray-900 font-bold">Kordova Tek</span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
