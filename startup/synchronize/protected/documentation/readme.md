We moved it to NORMAL to ensure it was before the deployment actions.
Deployment actions usually perform some DML that requires the DDL to be up to date.

Then we moved it to SECOND so it is still after FIRST (which is when the pools actually start up) but before EARLY which is where the process engine kicks in.
The process engine _must_ work even if DDL changes have occurred, otherwise it may silently not register hooks.