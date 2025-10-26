// Security checklist items for Microfactory warehouse
const checklistItems = [
  {
    id: "wood_lights",
    category: "Wood Workshop",
    text: "💡 Turn off the lights in the wood workshop",
    emoji: "💡",
    description:
      "Make sure all lights in the wood workshop are turned off to save energy and ensure safety. Check the main overhead lights, task lights at workbenches, and any additional lighting.",
    imageUrl:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&auto=format&fit=crop",
  },
  {
    id: "wood_machines",
    category: "Wood Workshop",
    text: "🔌 Unplug all wood workshop machines",
    emoji: "🔌",
    description:
      "Unplug all power tools and machines including table saws, band saws, sanders, drills, and routers. This prevents electrical hazards and unauthorized use.",
    imageUrl:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop",
  },
  {
    id: "wood_door",
    category: "Wood Workshop",
    text: "🚪 Close and lock the wood workshop door",
    emoji: "🚪",
    description:
      "Ensure the wood workshop door is fully closed and locked. Use the provided key to secure the deadbolt. This prevents unauthorized access to tools and materials.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
  },
  {
    id: "wood_windows",
    category: "Wood Workshop",
    text: "🪟 Close all windows in the wood workshop",
    emoji: "🪟",
    description:
      "Close and latch all windows in the wood workshop. This protects against weather, prevents heat loss, and enhances security. Check both upper and lower windows.",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
  },
  {
    id: "metal_lights",
    category: "Metal Workshop",
    text: "💡 Turn off the lights in the metal workshop",
    emoji: "💡",
    description:
      "Turn off all lighting in the metal workshop including overhead lights, welding area lights, and task lighting. Verify all switches are in the off position.",
    imageUrl:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&auto=format&fit=crop",
  },
  {
    id: "metal_machines",
    category: "Metal Workshop",
    text: "🔌 Unplug all metal workshop machines",
    emoji: "🔌",
    description:
      "Disconnect all metal working equipment including welders, grinders, drill presses, and lathes. Ensure gas cylinders for welding are turned off and secured.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
  },
  {
    id: "metal_door",
    category: "Metal Workshop",
    text: "🚪 Close and lock the metal workshop door",
    emoji: "🚪",
    description:
      "Secure the metal workshop by closing and locking the door. Ensure the lock is fully engaged. This protects expensive metalworking equipment and materials.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
  },
  {
    id: "metal_windows",
    category: "Metal Workshop",
    text: "🪟 Close all windows in the metal workshop",
    emoji: "🪟",
    description:
      "Close and secure all windows in the metal workshop. This is especially important for fire safety and to prevent dust and debris from entering overnight.",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
  },
  {
    id: "common_lights",
    category: "Common Areas",
    text: "💡 Turn off all common area lights",
    emoji: "💡",
    description:
      "Turn off lights in all common areas including hallways, bathrooms, kitchen, and meeting spaces. Leave only essential security lighting on if required.",
    imageUrl:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&auto=format&fit=crop",
  },
  {
    id: "heating",
    category: "Common Areas",
    text: "🌡️ Adjust heating/cooling to night mode",
    emoji: "🌡️",
    description:
      "Set the thermostat to night mode (typically 15°C in winter, off in summer). This saves energy while preventing pipes from freezing. The thermostat is located in the main hallway.",
    imageUrl:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&auto=format&fit=crop",
  },
  {
    id: "main_door",
    category: "Common Areas",
    text: "🔐 Lock the main entrance door",
    emoji: "🔐",
    description:
      "Ensure the main entrance door is fully closed and locked. Engage both the handle lock and the deadbolt. Verify the door is secure by testing it from the outside.",
    imageUrl:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&auto=format&fit=crop",
  },
  {
    id: "alarm",
    category: "Security",
    text: "🚨 Activate the security alarm",
    emoji: "🚨",
    description:
      "Activate the security alarm system as the final step. Enter the code on the keypad and wait for the confirmation beep. You have 60 seconds to exit after activation.",
    imageUrl:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&auto=format&fit=crop",
  },
];

module.exports = { checklistItems };
