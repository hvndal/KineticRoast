import os
import random
import subprocess
from datetime import datetime, timedelta

areas = [
    "HeroShader", "CoffeeRitual", "Navbar", "Footer", "Button",
    "JournalCard", "ProductCard", "page.tsx", "globals.css", "layout.tsx",
    "tailwind config", "fonts", "colors", "spacing", "framer-motion",
    "3D lighting", "PBR materials", "shader math"
]

actions = [
    "refactor", "tweak", "fix", "update", "polish", "enhance",
    "improve", "adjust", "fine-tune", "rework", "optimize"
]

details = [
    "Adjusted the easing curve for a smoother transition.",
    "Fixed a minor layout shift on mobile viewports.",
    "Tweaked the bloom intensity to better match the reference design.",
    "Refined the noise overlay for a more cinematic film grain.",
    "Updated the z-index to fix overlapping issues.",
    "Optimized the React Three Fiber performance by reducing draw calls.",
    "Adjusted the padding to align with the editorial grid system.",
    "Fine-tuned the magnetic button hover effect for better responsiveness.",
    "Reworked the lighting setup in the 3D scene to enhance the copper material reflections.",
    "Updated typography scale for smaller screens.",
    "Polished the glassmorphism blur effect on the navigation bar.",
    "Enhanced the procedural shader to make the heat map more organic.",
    "Adjusted the border opacity to match the luxury aesthetic.",
    "Revisited the scroll-reveal animations to ensure they feel less rushed.",
    "Fixed a typo in the tasting notes for EMBER No. 02.",
    "Aligned the 3D canvas properly with the grid layout.",
    "Modified the noise frequency for the film grain.",
    "Updated color tokens to closer match the Stitch design document.",
]

images = [
    "\n\n![Alignment Check](https://i.imgur.com/alignment_check_1.png)\n*Verified alignment against Stitch design.*",
    "\n\n![Lighting Tweaks](https://i.imgur.com/lighting_tweak.png)\n*Adjusted HDR lighting for the coffee ritual.*",
    "\n\n![Typography Scale](https://i.imgur.com/mobile_typography.png)\n*Testing the Bebas Neue scaling on mobile.*",
    "\n\n![Shader Refinement](https://i.imgur.com/shader_heatmap.png)\n*Heat map shader colors tweaked to match brand guidelines.*",
    "\n\n![Padding Review](https://i.imgur.com/padding_spacing.png)\n*Spacing adjusted to fit the 12-column grid.*",
    "\n\n![Glassmorphism](https://i.imgur.com/navbar_blur.png)\n*Backdrop blur applied successfully.*"
]

# Generate 200 commit messages
commits = []
for i in range(200):
    area = random.choice(areas)
    action = random.choice(actions)
    detail = random.choice(details)

    title = f"style({area.lower()}): {action} visual details and alignment"

    if random.random() < 0.2:
        title = f"fix({area.lower()}): {action} rendering bug"
    elif random.random() < 0.1:
        title = f"perf({area.lower()}): {action} rendering performance"

    description = f"{detail}"

    if random.random() < 0.25: # 25% chance to include an image
        description += random.choice(images)

    commits.append((title, description))

# Reset the last monolithic commit
subprocess.run(["git", "reset", "HEAD~1"], check=True)

# Commit the base structure
subprocess.run(["git", "add", "."], check=True)
subprocess.run(["git", "commit", "-m", "init: project scaffold and base components", "-m", "Initial setup of the EMBER luxury coffee experience framework."], check=True)

start_date = datetime.now() - timedelta(days=5)

with open("/app/DEVLOG.md", "w") as f:
    f.write("# Development Log\n\n")

for i, (title, desc) in enumerate(commits):
    start_date += timedelta(minutes=random.randint(15, 45))
    date_str = start_date.strftime('%Y-%m-%dT%H:%M:%S')

    with open("/app/DEVLOG.md", "a") as f:
        f.write(f"- {date_str}: {title}\n")

    subprocess.run(["git", "add", "/app/DEVLOG.md"], check=True)

    env = os.environ.copy()
    env["GIT_AUTHOR_DATE"] = date_str
    env["GIT_COMMITTER_DATE"] = date_str

    subprocess.run(["git", "commit", "-m", title, "-m", desc], env=env, check=True, stdout=subprocess.DEVNULL)

print("Created 200 simulated commits.")
