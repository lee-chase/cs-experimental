import * as foo from "@carbon/ibm-cloud-cognitive-experimental";
console.log("config.js", foo.pkg, foo.pkg.component.ExampleComponent);
console.log(foo);

// Enable all 'canary' (not yet reviewed/released) components
// that we want to make use of
foo.pkg.component.ExampleComponent = true;

// Live dangerously: enable all components!
// pkg.setAllComponents(true);

// Enable all pre-release feature flags that we want to use
// pkg.flags.noneJustYet = true;

// Live dangerously: enable all pre-release features!
// pkg.setAllFeatures(true);
