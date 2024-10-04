export type AmmCpi = {
  "version": "0.1.0",
  "name": "amm_cpi",
  "instructions": [
    {
      "name": "proxySwapBaseIn",
      "docs": [
        "swap_base_in instruction"
      ],
      "accounts": [
        {
          "name": "ammProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minimumAmountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxySwapBaseOut",
      "docs": [
        "swap_base_out instruction"
      ],
      "accounts": [
        {
          "name": "ammProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maxAmountIn",
          "type": "u64"
        },
        {
          "name": "amountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxySwapBaseIn2",
      "accounts": [
        {
          "name": "ammProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minimumAmountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxySwap",
      "accounts": [
        {
          "name": "clmmProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The user performing the swap"
          ]
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The factory state to read protocol fees"
          ]
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The program account of the pool in which the swap will be performed"
          ]
        },
        {
          "name": "inputTokenAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The user token account for input token"
          ]
        },
        {
          "name": "outputTokenAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The user token account for output token"
          ]
        },
        {
          "name": "inputVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The vault token account for input token"
          ]
        },
        {
          "name": "outputVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The vault token account for output token"
          ]
        },
        {
          "name": "observationState",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The program account for the most recent oracle observation"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SPL program for token transfers"
          ]
        },
        {
          "name": "tokenProgram2022",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SPL program 2022 for token transfers"
          ]
        },
        {
          "name": "memoProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputVaultMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The mint of token vault 0"
          ]
        },
        {
          "name": "outputVaultMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The mint of token vault 1"
          ]
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "otherAmountThreshold",
          "type": "u64"
        },
        {
          "name": "sqrtPriceLimitX64",
          "type": "u128"
        },
        {
          "name": "isBaseInput",
          "type": "bool"
        }
      ]
    },
    {
      "name": "checkTokenBalance",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": "u64"
    },
    {
      "name": "swapAndCheckBalance",
      "accounts": [
        {
          "name": "ammProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minimumAmountOut",
          "type": "u64"
        }
      ]
    }
  ]
};

export const IDL: AmmCpi = {
  "version": "0.1.0",
  "name": "amm_cpi",
  "instructions": [
    {
      "name": "proxySwapBaseIn",
      "docs": [
        "swap_base_in instruction"
      ],
      "accounts": [
        {
          "name": "ammProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minimumAmountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxySwapBaseOut",
      "docs": [
        "swap_base_out instruction"
      ],
      "accounts": [
        {
          "name": "ammProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maxAmountIn",
          "type": "u64"
        },
        {
          "name": "amountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxySwapBaseIn2",
      "accounts": [
        {
          "name": "ammProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minimumAmountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxySwap",
      "accounts": [
        {
          "name": "clmmProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The user performing the swap"
          ]
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The factory state to read protocol fees"
          ]
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The program account of the pool in which the swap will be performed"
          ]
        },
        {
          "name": "inputTokenAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The user token account for input token"
          ]
        },
        {
          "name": "outputTokenAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The user token account for output token"
          ]
        },
        {
          "name": "inputVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The vault token account for input token"
          ]
        },
        {
          "name": "outputVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The vault token account for output token"
          ]
        },
        {
          "name": "observationState",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The program account for the most recent oracle observation"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SPL program for token transfers"
          ]
        },
        {
          "name": "tokenProgram2022",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SPL program 2022 for token transfers"
          ]
        },
        {
          "name": "memoProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputVaultMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The mint of token vault 0"
          ]
        },
        {
          "name": "outputVaultMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The mint of token vault 1"
          ]
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "otherAmountThreshold",
          "type": "u64"
        },
        {
          "name": "sqrtPriceLimitX64",
          "type": "u128"
        },
        {
          "name": "isBaseInput",
          "type": "bool"
        }
      ]
    },
    {
      "name": "checkTokenBalance",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": "u64"
    },
    {
      "name": "swapAndCheckBalance",
      "accounts": [
        {
          "name": "ammProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minimumAmountOut",
          "type": "u64"
        }
      ]
    }
  ]
};
