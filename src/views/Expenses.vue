<template>
    <section>
        <header>
            <p>My balance<br/><span>$921.48</span></p>
            <div class="logo">
                <img src="@/assets/logo.svg" alt="">
            </div>
        </header>
        <article class="card">
            <h2>Spending - Last 7 days</h2>
            <ExpensesChart/>
            <hr>
            <footer class="total">
                <p>Total this month<br/><span>$478.33</span></p>
                <p><span class="percentage">+2.4%</span><br/>from last month</p>
            </footer>
        </article>
    </section>
</template>

<script>
import ExpensesChart from '@/components/ExpensesChart.vue'
export default {
    name: 'Expenses',
    components: {
        ExpensesChart
    }
}
</script>

<style lang="scss" scoped>
    section {
        margin: 50px auto;

        span {
            font-weight: 700;
        }

        @include respond (medium) {
            margin: 150px auto;
            font-size: 1.1em;
        }
    }
    header,
    article {
        border-radius: 10px;
        margin: 15px auto;
        padding: 20px;
        max-width: 540px;
        width: 100%;

        @include respond (medium) {
            border-radius: 20px;
            margin: 25px auto;
            width: 540px;
        }
    }
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: $soft-red;
        color: $white;

        .logo {
            height: auto;

            img {
                height: 40px;
            }
        }
        p {
            text-align: left;

            span {
                font-size: 1.5em;
            }
        }

        @include respond (medium) {
            padding: 20px 30px;

            .logo img {
                height: 50px;
            }
            p {
                line-height: 2.2em;
                
                span {
                    font-size: 1.8em;
                }
            }
        }
    }
    article {
        background: $white;

        h2 {
            text-align: left;
            color: $dark-brown;
        }
        hr {
            border: 0;
            height: 2px;
            background: $cream;
            margin: 20px 0;
        }
        footer {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;

            p {
                color: $medium-brown;
                &:first-child {
                    text-align: left;
                }
                &:last-child {
                    text-align: right;
                    align-self: flex-end;
                }
                span {
                    font-size: 2em;
                    color: $dark-brown;

                    &.percentage {
                        font-size: 1em;
                    }
                }
            }
        }

        @include respond (medium) {
            padding: 30px 40px 40px;

            h2 {
                font-size: 1.8em;
            }
            hr {
                margin: 30px 0;
            }
            footer p span {
                font-size: 2.6em;
            }
        }
    }
</style>