import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "tlo96hsy",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token:
    "skJFnrAMpbOVdgYf0qEKVknCjMfn4U6PfDmWLJYSWNuWSzFVhkv0cbKUJcLRLkbeTQ3AjYeXJX2VBdo97ax1RX8JzNbqxzmqDC9BLSSYoaTKzbISPdAFM1n2vFLaN9iezSQZBWjamGnKZvRObMDKJylTvQommvCgF5IW96f2IvwsjvwJ3FGt", // or leave blank for unauthenticated usage
  useCdn: false, //for fresh data
});
