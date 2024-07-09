<TabPanel className="p-10 bg-white">
              <h2 className="text-2xl font-semibold">Profile Settings</h2>
              <TabGroup>
                <TabList className="flex space-x-1 bg-white text-left p-3 px-7 cursor-pointer pb-0 mt-4">
                  {categories.map((category, index) => (
                    <Tab as="div" key={index} className={tabClasses}>
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className="pt-7">
                      <CustomerForm />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="pt-7 pl-7">
                      <div className="text-xl pb-7 font-medium text-[#333B69]">
                        Change Password
                      </div>
                      <div className="w-1/2">
                        <form onSubmit={handleSubmitSecurity(onSubmitSecurity)}>
                          <div className="mb-4 pb-7">
                            <label htmlFor="currentPassword" className="block mb-2 text-[#6E6E6E]">
                              Current Password
                            </label>
                            <input
                              id="currentPassword"
                              type="password"
                              {...registerSecurity("currentPassword", { required: true })}
                              className="input-field p-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none text-[#6E6E6E]"
                            />
                            {securityErrors.currentPassword && (
                              <span role="alert" className="text-red-600">
                                Current Password is required
                              </span>
                            )}
                          </div>
                          <div className="mb-4 pb-7">
                            <label htmlFor="newPassword" className="block mb-2 text-[#6E6E6E]">
                              New Password
                            </label>
                            <input
                              id="newPassword"
                              type="password"
                              {...registerSecurity("newPassword", { required: true })}
                              className="input-field p-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none text-[#6E6E6E]"
                            />
                            {securityErrors.newPassword && (
                              <span role="alert" className="text-red-600">
                                New Password is required
                              </span>
                            )}
                          </div>
                         
                            <button
                              type="submit"
                              className="btn-submit rounded bg-[#5027D9] py-3 px-5 text-sm text-white"
                            >
                              Save changes
                            </button>
                          
                        </form>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </TabPanel>