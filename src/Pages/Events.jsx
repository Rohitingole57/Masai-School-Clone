import React from "react";
import "./Events.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import ApplyButton from "../Componants/ApplyButton";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { SvgIcon } from "@mui/material";
import Footer from "../Componants/Footer";
const Events = () => {
  return (
    <div className="events">
      <div>
        <div className="events_first">
          <h1>Webinars & Masterclasses</h1>
          <p>
            Learn from industry experts and test your skills against peers
            <br />
            during our comprehensive events, masterclasses & contests.
            <br />
            Experience impactful learning with Masai by your side.
          </p>
        </div>
        <div>
          <Tabs variant="unstyled">
            <div className="tabs_search">
              <div>
                <TabList>
                  <Tab
                    borderColor="white.400"
                    borderRadius="10px"
                    padding="12px 15px"
                    marginRight="7px"
                    bg="white"
                    _selected={{
                      fontSize: "16px",
                      color: "white",
                      bg: "red.400",
                      borderColor: "white.500",
                      borderRadius: "10px",
                      padding: "12px",
                      marginRight: "7px",
                    }}
                  >
                    All
                  </Tab>
                  <Tab
                    borderColor="white.400"
                    borderRadius="10px"
                    padding="12px 15px"
                    marginRight="7px"
                    bg="white"
                    _selected={{
                      fontSize: "16px",
                      color: "white",
                      bg: "red.400",
                      borderColor: "white.500",
                      borderRadius: "10px",
                      padding: "12px",
                      marginRight: "7px",
                    }}
                  >
                    Webinars
                  </Tab>
                  <Tab
                    borderColor="white.400"
                    borderRadius="10px"
                    padding="12px 15px"
                    marginRight="7px"
                    bg="white"
                    _selected={{
                      fontSize: "16px",
                      color: "white",
                      bg: "red.400",
                      borderColor: "white.500",
                      borderRadius: "8px",
                      padding: "12px",
                      marginRight: "7px",
                    }}
                  >
                    Masterclasses
                  </Tab>
                </TabList>
              </div>
              <div class="search-bar">
                <input
                  type="text"
                  placeholder="Search..."
                  class="search-input"
                />
                <button class="search-button">
                  <SearchIcon />
                </button>
              </div>
            </div>
            <TabPanels>
              <TabPanel>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">30</span>
                    <span className="tabs_left_span1">October</span>
                    <div className="tabs_bottom">
                      <span>26</span> minutes left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_Bhat_Webinar_Website_Desktop_Thumbnail_b6b8407006.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          Webinar with our Co-founder
                          <span>FOUNDER WEBINAR</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1183
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">23</span>
                    <span className="tabs_left_span1">November</span>
                    <div className="tabs_bottom">
                      <span>20</span> Days left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Komal_Raj_Website_Desktop_Thumbnail_e1b0816c60.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          How to Start a career in Data
                          <span>MASTERCALSS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>06:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            2213
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">13</span>
                    <span className="tabs_left_span1">December</span>
                    <div className="tabs_bottom">
                      <span>20</span> Days left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Arsh_Website_Desktop_Thumbnail_6d19bd8390.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          How to create resumes for SDE roles
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>12:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>01:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            2153
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">13</span>
                    <span className="tabs_left_span1">Novembar</span>
                    <div className="tabs_bottom">
                      <span>6</span> Days left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Venu_Website_Desktop_Thumbnail_copy_2_5891ec4a69.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          Sorting Algorithms Explained
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>06:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>30min</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>06:30</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1104
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">17</span>
                    <span className="tabs_left_span1">December</span>
                    <div className="tabs_bottom">
                      <span>2</span> Month left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Aman_Singhal_Website_Desktop_Thumbnail_ad2ba88280.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          How to become an SDE
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            2143
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">23</span>
                    <span className="tabs_left_span1">December</span>
                    <div className="tabs_bottom">
                      <span>16</span> days left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Varun_Bhatt_Website_Desktop_Thumbnail_7da6c6391f.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          Projects to Crack an SDE Job
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1183
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">30</span>
                    <span className="tabs_left_span1">October</span>
                    <div className="tabs_bottom">
                      <span>26</span> minutes left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_Bhat_Webinar_Website_Desktop_Thumbnail_b6b8407006.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          Webinar with our Co-founder
                          <span>FOUNDER WEBINAR</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1183
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">21</span>
                    <span className="tabs_left_span1">October</span>
                    <div className="tabs_bottom">
                      <span>26</span> minutes left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Nrupul_Website_Desktop_Thumbnail_copy_072e7fe650.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          A Comprehensive CSS Tutorial
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1183
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">30</span>
                    <span className="tabs_left_span1">October</span>
                    <div className="tabs_bottom">
                      <span>26</span> minutes left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Albert6_ce144371a1.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          Build amazing tools using ChatGPT in 60 minutes
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1183
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">30</span>
                    <span className="tabs_left_span1">November</span>
                    <div className="tabs_bottom">
                      <span>26</span> minutes left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Deepankar6_c6e646b75f.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          Predicting songs on Spotify using data
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1100
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">30</span>
                    <span className="tabs_left_span1">October</span>
                    <div className="tabs_bottom">
                      <span>26</span> minutes left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_Bhat_Webinar_Website_Desktop_Thumbnail_b6b8407006.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          Webinar with our Co-founder
                          <span>FOUNDER WEBINAR</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1183
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">17</span>
                    <span className="tabs_left_span1">December</span>
                    <div className="tabs_bottom">
                      <span>2</span> Month left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Aman_Singhal_Website_Desktop_Thumbnail_ad2ba88280.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          How to become an SDE
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            2143
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">23</span>
                    <span className="tabs_left_span1">November</span>
                    <div className="tabs_bottom">
                      <span>20</span> Days left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Komal_Raj_Website_Desktop_Thumbnail_e1b0816c60.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          How to Start a career in Data
                          <span>MASTERCALSS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>06:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            2213
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">13</span>
                    <span className="tabs_left_span1">December</span>
                    <div className="tabs_bottom">
                      <span>20</span> Days left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Arsh_Website_Desktop_Thumbnail_6d19bd8390.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          How to create resumes for SDE roles
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>12:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>01:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            2153
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">13</span>
                    <span className="tabs_left_span1">Novembar</span>
                    <div className="tabs_bottom">
                      <span>6</span> Days left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Venu_Website_Desktop_Thumbnail_copy_2_5891ec4a69.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          Sorting Algorithms Explained
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>06:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>30min</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>06:30</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1104
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">23</span>
                    <span className="tabs_left_span1">December</span>
                    <div className="tabs_bottom">
                      <span>16</span> days left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Varun_Bhatt_Website_Desktop_Thumbnail_7da6c6391f.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          Projects to Crack an SDE Job
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1183
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">30</span>
                    <span className="tabs_left_span1">October</span>
                    <div className="tabs_bottom">
                      <span>26</span> minutes left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_Bhat_Webinar_Website_Desktop_Thumbnail_b6b8407006.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          Webinar with our Co-founder
                          <span>FOUNDER WEBINAR</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1183
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">21</span>
                    <span className="tabs_left_span1">October</span>
                    <div className="tabs_bottom">
                      <span>26</span> minutes left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Nrupul_Website_Desktop_Thumbnail_copy_072e7fe650.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          A Comprehensive CSS Tutorial
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1183
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">30</span>
                    <span className="tabs_left_span1">October</span>
                    <div className="tabs_bottom">
                      <span>26</span> minutes left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Albert6_ce144371a1.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          Build amazing tools using ChatGPT in 60 minutes
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1183
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs_data">
                  <div className="tabs_data_left">
                    <span className="tabs_left_span">30</span>
                    <span className="tabs_left_span1">November</span>
                    <div className="tabs_bottom">
                      <span>26</span> minutes left
                    </div>
                  </div>
                  <div className="tabs_data_right">
                    <div className="tabs_right_one">
                      <img
                        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Deepankar6_c6e646b75f.png"
                        alt=""
                      />
                    </div>
                    <div className="tabs_right_two">
                      <div className="tabs_right_two1">
                        <div className="data1">
                          Predicting songs on Spotify using data
                          <span>MASTERCLASS</span>
                        </div>
                        <div className="btnandtime">
                          <div className="timestamp">
                            <div className="text_left">
                              <div>07:00</div>
                              <div>pm</div>
                            </div>
                            <div className="text_middle">
                              <div>1h</div>
                              <div className="text_line">
                                <div className="text_line_left"></div>
                                <div className="text_line_middle">
                                  <div></div>
                                </div>
                              </div>
                              <div>Duration</div>
                            </div>
                            <div className="text_right">
                              <div>08:00</div>
                              <div>pm</div>
                            </div>
                          </div>
                          <ApplyButton />
                        </div>
                      </div>
                      <div className="tabs_right_two2">
                        <div className="data2">
                          <span className="firesvg">
                            <SvgIcon>
                              <LocalFireDepartmentIcon />
                            </SvgIcon>
                            1100
                          </span>
                          people have registered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Events;
