use anchor_lang::prelude::*;
use instructions::*;
use spl_token::state::Account as TokenAccount;

pub mod instructions;

declare_id!("ecUPvg8kgZRpu2bE3PLe4Y95bFHCSxYnrU6o7xPdV8v");

#[program]
pub mod amm_cpi {
    use solana_program::program_pack::Pack;

    use super::*;

    /// swap_base_in instruction
    pub fn proxy_swap_base_in(
        ctx: Context<ProxySwapBaseIn>,
        amount_in: u64,
        minimum_amount_out: u64,
    ) -> Result<()> {
        instructions::swap_base_in(ctx, amount_in, minimum_amount_out)
    }

    /// swap_base_out instruction
    pub fn proxy_swap_base_out(
        ctx: Context<ProxySwapBaseOut>,
        max_amount_in: u64,
        amount_out: u64,
    ) -> Result<()> {
        instructions::swap_base_out(ctx, max_amount_in, amount_out)
    }

    pub fn proxy_swap_base_in2(
        ctx: Context<ProxySwapBaseIn>,
        amount_in: u64,
        minimum_amount_out: u64,
    ) -> Result<()> {
        instructions::swap_base_in_unsigned(ctx, amount_in, minimum_amount_out)
    }

    pub fn proxy_swap<'a, 'b, 'c: 'info, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, ProxySwap<'info>>,
        amount: u64,
        other_amount_threshold: u64,
        sqrt_price_limit_x64: u128,
        is_base_input: bool,
    ) -> Result<()> {
        instructions::proxy_swap(
            ctx,
            amount,
            other_amount_threshold,
            sqrt_price_limit_x64,
            is_base_input,
        )
    }

    // pub fn check_token_balance(ctx: Context<CheckTokenBalance>) -> Result<u64> {
    //     let token_account_info = &ctx.accounts.token_account;
    //     let token_account = TokenAccount::unpack(&token_account_info.try_borrow_data()?)?;
    //     Ok(token_account.amount)
    // }

    // pub fn swap_and_check_balance(
    //     ctx: Context<ProxySwapBaseIn>,
    //     amount_in: u64,
    //     minimum_amount_out: u64,
    // ) -> Result<()> {
    //     // Call the proxy_swap_base_in2 function
    //     proxy_swap_base_in2(ctx, amount_in, minimum_amount_out)?;

    //     let _check_ctx = CheckTokenBalance {
    //             signer: ctx.accounts.user_source_owner.clone(),
    //             token_account: ctx.accounts.user_token_destination.to_account_info(), // Change as needed
    //         };

    //     // Check the output token balance after the swap
    //     // let output_balance = check_token_balance(ctx)?;
    //     // msg!("Output Token Balance after swap: {}", output_balance);
    //     Ok(())
    // }

}

#[derive(Accounts)]
pub struct CheckTokenBalance<'info> {
    pub signer: Signer<'info>,
    ///CHECK:
    pub token_account: AccountInfo<'info>,
}