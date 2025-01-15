import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  search: {
    codeblocks: false
  },
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
  basePath: "/docs",
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  // distDir: "build" // by default it's "out"
});
