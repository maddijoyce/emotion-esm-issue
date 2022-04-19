import styled from "@emotion/styled";

const keys = Object.keys(styled);

console.log(keys);

if (keys.length === 1 && keys[0] === "default") {
  console.warn("This should not be the case, this should be h1, h2, etc");
  console.warn("So that we can do `styled.h1...`");
  console.warn("Right now we would need to do `styled.default.h1...`");
}
