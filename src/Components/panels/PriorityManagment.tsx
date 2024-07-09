<TabPanel className="p-10 bg-white">
              

              <div className="flex gap-4">
                <div className="w-[35%]">
                  <select
                    name="statusScale"
                    id="statusScale"
                    className="form-select border-2 border-[#8E8E8E] text-[#8E8E8E] focus:outline-none rounded-md p-3 w-full  bg-no-repeat bg-right appearance-none"
                    style={{
                      backgroundImage: `url(${DropdownBlack.src})`,
                      backgroundSize: "20px",
                      backgroundPosition: "right 0.5rem center",
                    }}
                  >
                    <option value="">Choose status scale level (1-3)</option>
                    <option value="1-2">On 1-2</option>
                    <option value="1-3">On 1-3</option>
                    <option value="1-4">On 1-4</option>
                    <option value="1-5">On 1-5</option>
                    <option value="1-6">On 1-6</option>
                  </select>
                </div>

                <div className="w-[65%] bg-[#FBFBFB] px-8 py-4">
                  <table className="min-w-full bg-white">
                    <thead className="border-b-4 border-[#FBFBFB] text-left text-[#9291A5]">
                      <tr>
                        <th className="px-4 py-2 font-medium">Priority Name</th>
                        <th className="px-4 py-2 font-medium">Color</th>
                        <th className="px-4 py-2 font-medium">Preview</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-2">Low</td>
                        <td className="px-4 py-2">
                          <select name="color" id="color">
                            <option value="red">
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-4 h-4 rounded-full ml-4 bg-[#3498db]"
                                  // style={{ backgroundColor: "#3498db" }}
                                >blue</div>
                              </div>
                            </option>
                            <option value="red">
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-4 h-4 rounded-full ml-4 bg-red-600"
                                  // style={{ backgroundColor: "#3498db" }}
                                >red</div>
                              </div>
                            </option>
                          </select>
                          {/* <div className="flex items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-full ml-4"
                              style={{ backgroundColor: "#3498db" }}
                            ></div>
                          </div> */}
                        </td>
                        <td className="px-4 py-2">Low</td>
                      </tr>
                      <tr className="bg-[#FBFBFB]">
                        <td className="px-4 py-2">Mid</td>
                        <td className="px-4 py-2">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-full  ml-4"
                              style={{ backgroundColor: "#2ecc71" }}
                            ></div>
                          </div>
                        </td>
                        <td className="px-4 py-2">Mid</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-2">High</td>
                        <td className="px-4 py-2">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-full  ml-4"
                              style={{ backgroundColor: "#e74c3c" }}
                            ></div>
                          </div>
                        </td>
                        <td className="px-4 py-2">High</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="pt-3 pl-2 flex">
                    <Image src={info} alt="" />
                    <p className="text-[#979797] text-sm pl-1">
                      Click on priority name to edit
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>