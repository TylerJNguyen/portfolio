{
  description = "Bun2Nix minimal sample";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/default";

    bun2nix = {
      url = "github:nix-community/bun2nix";
      inputs = {
        nixpkgs.follows = "nixpkgs";
        systems.follows = "systems";
      };
    };
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
        overlays = [
          inputs.bun2nix.overlays.default
        ];
      }
    );
  in {
    # packages = eachSystem (system: {
    #   default = pkgsFor.${system}.callPackage ./default.nix { };
    # });

    devShells = eachSystem (system: {
      default = pkgsFor.${system}.mkShell {
        packages = builtins.attrValues {
          inherit (pkgsFor.${system})
            bun
            bun2nix
          ;
        };

        # shellHook = ''
        #   bun install --frozen-lockfile
        # '';
      };
    });

    formatter = eachSystem (system: pkgsFor.${system}.nixfmt-tree);
  };
}
