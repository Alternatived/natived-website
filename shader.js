precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circle(vec2 uv, vec2 pos, float size) {
  return smoothstep(size, size - 0.01, distance(uv, pos));
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;

  vec2 mouse = u_mouse / u_resolution;
  float d = distance(uv, mouse);

  // warp effect near the cursor
  float strength = 0.15 / (d + 0.05);
  vec2 warp = normalize(uv - mouse) * strength;

  uv += warp;

  // background grid effect
  float grid = step(0.05, abs(sin(uv.x * 40.0)) * abs(sin(uv.y * 40.0)));

  // blob reveal around cursor
  float blob = 1.0 - circle(uv, mouse, 0.15);

  vec3 color = mix(vec3(0.0, 1.0, 0.0), vec3(0.0), grid * blob);
  gl_FragColor = vec4(color, 1.0);
}
