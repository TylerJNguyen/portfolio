{
  lib,
  buildNpmPackage,
  ...
}:
buildNpmPackage {
  pname = "portfolio";
  version = "1.0.0";

  src = ../.;

  npmDepsHash = "sha256-cTVYL2dzWJunqpsMhmyD4j5+xEeRD54/OdLO8s60vSI=";

  installPhase = ''
    runHook preInstall

    mkdir -p $out/dist
    cp -r ./dist $out

    runHook postInstall
  '';
}
