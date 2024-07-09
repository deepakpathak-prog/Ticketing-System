<TabPanel className="p-10 bg-white">
              {showAddMemberForm ? (
                <div className="flex justify-between items-center py-7">
                  <h2 className="text-2xl font-semibold">Add a new member</h2>
                  <div className="flex gap-5">
                    <Button
                      type="button"
                      className="rounded bg-transparent py-3 px-7 text-sm text-[#5027D9] border-[#5027D9] border-2"
                      onClick={handleCancelAddMember}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="rounded bg-[#5027D9] py-3 px-10 text-sm text-white"
                      onClick={handleAddMemberClick}
                    >
                      Create member
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center py-7 ">
                  <h2 className="text-2xl font-semibold">
                    Organisation Management
                  </h2>
                  <div className="flex gap-5">
                    <SearchBar />
                    <div className="flex gap-5 ">
                      <div>
                        <Button
                          type="button"
                          className="rounded bg-[#5027D9] py-2 px-4 text-sm text-white items-center gap-2  flex"
                          onClick={handleAddMemberClick}
                        >
                          <Image src={Plus} alt="add" width={22} height={22} />
                          Add new member
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {showAddMemberForm ? (
                <div className=" mt-7 mb-10">
                  {/* <CustomerForm onCancel={handleCancelAddMember} /> */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Basic Details
                    </h2>
                    <div className="flex py-5 items-center">
                      <div className="w-[20%] ">
                        <Image
                          src={ProfilePic}
                          alt="Profile Pic"
                          className="pr-3"
                          width={150}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 w-full">
                        <div>
                          <label
                            htmlFor="customerName"
                            className="block text-sm "
                          >
                            Full name
                          </label>
                          <input
                            id="customerName"
                            type="text"
                            // {...register("customerName", { required: true })}
                            className="input-field p-2 mt-2 mb-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                          />
                          {/* {errors.customerName && (
              <span role="alert" className="text-red-600">
                Customer Name is required
              </span>
            )} */}
                        </div>
                        <div>
                          <label
                            htmlFor="companyName"
                            className="block text-sm  "
                          >
                            Gender
                          </label>
                          <input
                            id="companyName"
                            type="text"
                            // {...register("companyName", { required: true })}
                            className="input-field p-2 mt-2 mb-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                          />
                          {/* {errors.companyName && (
              <span role="alert" className="text-red-600">
                Company Name is required
              </span>
            )} */}
                        </div>
                        <div>
                          <label
                            htmlFor="companyUrl"
                            className="block text-sm "
                          >
                            Department
                          </label>
                          <input
                            id="companyUrl"
                            type="url"
                            // {...register("companyUrl", { required: true })}
                            className="input-field p-2 mt-2 mb-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                          />
                          {/* {errors.companyUrl && (
              <span role="alert" className="text-red-600">
                Company URL is required
              </span>
            )} */}
                        </div>
                        <div>
                          <label
                            htmlFor="companyUrl"
                            className="block text-sm "
                          >
                            Position
                          </label>
                          <input
                            id="companyUrl"
                            type="url"
                            // {...register("companyUrl", { required: true })}
                            className="input-field p-2 mt-2 mb-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                          />
                          {/* {errors.companyUrl && (
              <span role="alert" className="text-red-600">
                Company URL is required
              </span>
            )} */}
                        </div>
                      </div>
                    </div>
                    <div className="text-xl font-semibold py-7">
                      Contact details
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="companyUrl" className="block text-sm ">
                          Phone number
                        </label>
                        <input
                          id="companyUrl"
                          type="url"
                          // {...register("companyUrl", { required: true })}
                          className="input-field p-2 mt-2 mb-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                        />
                        {/* {errors.companyUrl && (
              <span role="alert" className="text-red-600">
                Company URL is required
              </span>
            )} */}
                      </div>

                      <div>
                        <label htmlFor="companyUrl" className="block text-sm ">
                          Email *
                        </label>
                        <input
                          id="companyUrl"
                          type="url"
                          // {...register("companyUrl", { required: true })}
                          className="input-field p-2 mt-2 mb-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                        />
                        {/* {errors.companyUrl && (
              <span role="alert" className="text-red-600">
                Company URL is required
              </span>
            )} */}
                      </div>
                    </div>

                    <div className="text-xl font-semibold py-7">
                      Permission settings
                    </div>

                    <div className="flex gap-20">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="manager"
                          checked={selectedPositions.includes("Manager")}
                          onChange={() => handlePositionSelect("Manager")}
                          className="form-checkbox h-5 w-5 text-[#5027D9]"
                        />
                        <label htmlFor="manager" className="ml-2">
                          Manager
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="admin"
                          checked={selectedPositions.includes("Admin")}
                          onChange={() => handlePositionSelect("Admin")}
                          className="form-checkbox h-5 w-5 text-[#5027D9]"
                        />
                        <label htmlFor="admin" className="ml-2">
                          Admin
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex mt-7 mb-10">
                  <div className="w-[15%] pr-4 pl-2 border-r-2">
                    <TabGroup
                      selectedIndex={innerTabIndex}
                      onChange={setInnerTabIndex}
                    >
                      <div className="text-xl pb-7 font-semibold">
                        Department
                      </div>
                      <TabList className="space-y-4 ">
                        {departmentTabs.map((innerTab, index) => (
                          <Tab
                            as="div"
                            key={index}
                            className={({ selected }) =>
                              `text-left cursor-pointer ${
                                selected
                                  ? "text-white bg-[#5027D9] p-3"
                                  : "text-[#91919B] p-3"
                              }`
                            }
                            onClick={
                              innerTab === "Add new"
                                ? handleAddNewTab
                                : undefined
                            }
                          >
                            {innerTab}
                          </Tab>
                        ))}
                      </TabList>
                    </TabGroup>
                  </div>
                  <div className="w-[85%] pl-4">
                    {/* Display the total number of employees */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold pb-3">
                        Total Members:{" "}
                        <span className="text-[#5027D9]">
                          {getEmployees(departmentTabs[innerTabIndex]).length}
                        </span>
                      </h3>
                    </div>
                    {/* Render employees of the selected department */}
                    <div className="grid grid-cols-4 gap-4">
                      {getEmployees(departmentTabs[innerTabIndex]).map(
                        (employee) => (
                          <div
                            key={employee.id}
                            className="flex flex-col items-center justify-between mb-4 p-4 pb-0 border rounded "
                          >
                            <Image
                              src={employee.imageUrl}
                              alt={employee.name}
                              className="w-full h-full"
                            />
                            <div className="bg-white border-t-4 border-[#5027D9] w-[90%] pt-2 mt-1">
                              <h3 className="text-center font-semibold">
                                {employee.name}
                              </h3>
                              <p className="text-sm text-center">
                                {employee.role}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </TabPanel>