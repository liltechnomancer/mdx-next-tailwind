import { Popover, Transition } from "@headlessui/react";
import NavigationPopover from "./NavigationPopover";

const resolver = (navigationItem) => {
  if (navigationItem.type === "SUBMENU") {
    return (
      <NavigationPopover>
        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
          {navigationItem.subMenuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              {item.icon && (
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              )}
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </NavigationPopover>
    );
  }
  return (
    <a
      href={navigationItem.href}
      className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
      {navigationItem.name}
    </a>
  );
};

const DesktopNavigation = ({ navigationLinks }) => {
  return (
    <Popover.Group as="nav" className="hidden md:flex space-x-10">
      {navigationLinks.map(resolver)}
    </Popover.Group>
  );
};

export default DesktopNavigation;