{
  description = "My portfolio webpage";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/x86_64-linux";
  };

  outputs = inputs @ {
    systems,
    nixpkgs,
    ...
  }: let
    eachSystem = nixpkgs.lib.genAttrs (import systems);
    pkgsFor = eachSystem (
      system:
      import nixpkgs {
        inherit system;
      }
    );
  in {
    packages = eachSystem (system: {
      default = pkgsFor.${system}.callPackage ./nix { };
    });

    devShells = eachSystem (system: {
      default = pkgsFor.${system}.mkShell {
        packages = builtins.attrValues {
          inherit (pkgsFor.${system})
            nodejs_25
            prefetch-npm-deps
          ;
        };

        shellHook = ''
           npm ci
        '';
      };
    });
  };
}
