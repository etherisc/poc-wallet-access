# Standalone webapplication contract access poc
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Requires local `.env` file with the following variables:

```
NEXT_PUBLIC_PRODUCT_ADDRESS=0x8DA7eB4Ec3A4c1291797e13DB723f9046afF4a1C
NEXT_PUBLIC_RISK_ID=0xa57a6cbeaeb17408bb46e2f258d1dbf8346a256f7b68e305a3d29b821e246f5a
NEXT_PUBLIC_USDC_ADDRESS=0x8CdaF0CD259887258Bc13a92C0a6dA92698644C0
NEXT_PUBLIC_TREASURY_ADDRESS=0x98d9f9e8DEbd4A632682ba207670d2a5ACD3c489
NEXT_PUBLIC_INSURER_MNEMONIC=candy maple cake sugar pudding cream honey rich smooth crumble sweet treat
NEXT_PUBLIC_INSURER_ACCOUNT_INDEX=8
NEXT_PUBLIC_COUNTER_ADDRESS=0xeB9c951A873b37eaeE826bF5a23539aC9F76Ef8E
NEXT_PUBLIC_VERIFIER_ADDRESS=0xdD56E578c079532A04D879391596ac95751D7FBC
```

## Counter increment

http://localhost:3000

1. Connect (metamask) wallet or use wallet connect when using mobile
2. Click on _Count_ button and wait
3. Alert dialog will show incremented value

Requires env variable `NEXT_PUBLIC_COUNTER_ADDRESS` to be set to the address where the accessible [`Counter`](https://github.com/etherisc/hardhat-playground/blob/main/contracts/Counter.sol) contract is [deployed](https://github.com/etherisc/hardhat-playground/blob/main/scripts/deploy_counter.ts), e.g. `0x78A7164B9F915998d932160d24ba3b5656e34e44` on fuji testnet. 

## Get a new policy 

http://localhost:3000/policy

1. Connect (metamask) wallet or use wallet connect when using mobile
2. Click on _Create approval_ button and follow instructions in wallet to approve the amount to be transferred
3. Click on _Apply for policy_ button and wait for alert dialog to display the policy id

Only works on local chain (no public gif deployment useable for that right now) and with metamask (not wallet connect) as wallet connect and ganache seem to have an issue with our contracts. Requires env variables (example values)

```
NEXT_PUBLIC_PRODUCT_ADDRESS=0x8DA7eB4Ec3A4c1291797e13DB723f9046afF4a1C
NEXT_PUBLIC_RISK_ID=0xa57a6cbeaeb17408bb46e2f258d1dbf8346a256f7b68e305a3d29b821e246f5a
NEXT_PUBLIC_USDC_ADDRESS=0x8CdaF0CD259887258Bc13a92C0a6dA92698644C0
NEXT_PUBLIC_TREASURY_ADDRESS=0x98d9f9e8DEbd4A632682ba207670d2a5ACD3c489
NEXT_PUBLIC_INSURER_MNEMONIC=candy maple cake sugar pudding cream honey rich smooth crumble sweet treat
NEXT_PUBLIC_INSURER_ACCOUNT_INDEX=8
```

## Sign message and verify signature

http://localhost:3000/sign

1. Connect (metamask) wallet or use wallet connect when using mobile
2. Enter a message
3. Click _Sign message_ button
4. Signature will be shown 
5. Insert message and signature in either _Message verifier_ block (ethers or contract)
    - _Ethers_ will verify the signature using ethers.js
    - _Contract_ will verify the signature using the _Verifier_ smart contract
6. In the verify section connect (metamask) wallet or use wallet connect when using mobile 
7. Click _Verify signature_ button
8. Result will be shown in _Verified_ 

Requires env variable `NEXT_PUBLIC_VERIFIER_ADDRESS` to be set to the address where the accessible [`Verifier`](https://github.com/etherisc/hardhat-playground/blob/main/contracts/Verifier.sol) contract is [deployed](https://github.com/etherisc/hardhat-playground/blob/main/scripts/deploy_verifier.ts), e.g. `0xDEA14D28b8750492a14b4921c965F2CD1400D44a` on fuji testnet. 

