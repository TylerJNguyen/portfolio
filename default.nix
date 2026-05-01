{
  stdenv,
  bun2nix,
  ...
}:
stdenv.mkDerivation {

  src = ./.;

  nativeBuildInputs = [
    bun2nix.hook
  ];

  bunDeps = bun2nix.fetchBunDeps {
    bunNix = ./bun.nix;
  };

  buildPhase = ''
    bun run build
  '';

  installPhase = ''
    mkdir -p $out/dist

    cp -r ./dist $out
  '';
}
