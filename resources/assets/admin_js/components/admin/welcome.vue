
<template>
    <f7-app :params="f7params">
        <!-- ...  -->
        <f7-statusbar></f7-statusbar>
        <f7-view main>
            <f7-page>
                <f7-navbar>
                    <f7-nav-left/>
                    <f7-nav-title>Admin</f7-nav-title>
                    <f7-nav-right/>
                </f7-navbar>
                <f7-toolbar tabbar labels :bottom-md="isBottom">
                    <f7-link tab-link="#tab-1" tab-link-active no-hairline text="Home" icon-ios="material:home" icon-md="material:home"></f7-link>
                    <f7-link tab-link="#tab-2" no-hairline text="Notifications" icon-ios="material:notifications" icon-md="material:notifications"></f7-link>
                    <f7-link tab-link="#tab-3" no-hairline text="Settings" icon-ios="f7:settings_fill" icon-md="material:settings"></f7-link>
                </f7-toolbar>
                <f7-tabs>
                    <f7-tab id="tab-1" class="page-content" tab-active>
                        <f7-block>
                            <p>Home</p>
                        </f7-block>
                    </f7-tab>
                    <f7-tab id="tab-2" class="page-content">
                        <f7-block>
                            <p>Notifications</p>
                        </f7-block>
                    </f7-tab>
                    <f7-tab id="tab-3" class="page-content">
                        <f7-block>
                            <p>Settings</p>
                        </f7-block>
                    </f7-tab>
                </f7-tabs>
            </f7-page>
        </f7-view>
    </f7-app>
</template>

<script>
    import auth from '../../admin_auth.js';
    import { f7App, f7Navbar, f7Link, f7NavLeft, f7NavRight, f7NavTitle, f7Statusbar } from 'framework7-vue';

    export default {
        data() {
            return {
                isBottom: true,
                f7params: {
                    name: 'IMVueJS Admin',
                    id: 'com.imokhles.impanel.admin',
                    theme: 'ios',
                    // routes
                    routes: [

                    ],
                    // ... other params
                },
                auth: auth
            }
        },
        components: {
            f7App,
            f7Statusbar,
            f7Navbar,
            f7Link,
            f7NavLeft,
            f7NavRight,
            f7NavTitle
        },
        methods: {
            signout() {
                auth.signout();
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                auth.check();
            })
        },
        name: "admin_welcome"
    }
</script>