---

*lokasi*

generator-kode/package-lock.json

*isi konten*

```
{
  "name": "gen-kode",
  "version": "1.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "gen-kode",
      "version": "1.1.0",
      "license": "ISC",
      "dependencies": {
        "@google/genai": "^0.12.0",
        "dotenv": "^16.5.0",
        "fast-glob": "^3.3.3",
        "mime-types": "^3.0.1",
        "prompt-sync": "^4.2.0"
      }
    },
    "node_modules/@google/genai": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/@google/genai/-/genai-0.12.0.tgz",
      "integrity": "sha512-SJtCHac+HPgmwELpJpPKbaV4rk397bS2D42XgFR2NBEARDKd/79RcaRUFFd55pYUJ+gfaz9Bv6KYoiz/P6eZKA==",
      "license": "Apache-2.0",
      "dependencies": {
        "google-auth-library": "^9.14.2",
        "ws": "^8.18.0",
        "zod": "^3.22.4",
        "zod-to-json-schema": "^3.22.4"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/agent-base": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.4.tgz",
      "integrity": "sha512-MnA+YT8fwfJPgBx3m60MNqakm30XOkyIoH1y6huTQvC0PwZG7ki8NacLBcrPbNoo8vEZy7Jpuk7+jMO+CUovTQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/ansi-regex": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.1.tgz",
      "integrity": "sha512-ILlv4k/3f6vfQ4OoP2AGvirOktlQ98ZEL1k9FaQjxa3L1abBgbuTDAdPOpvbGncC0BTVQrl+OM8xZGK6tWXt7g==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/bignumber.js": {
      "version": "9.3.1",
      "resolved": "https://registry.npmjs.org/bignumber.js/-/bignumber.js-9.3.1.tgz",
      "integrity": "sha512-Ko0uX15oIUS7wJ3Rb30Fs6SkVbLmPBAKdlm7q9+ak9bbIeFf0MwuBsQV6z7+X768/cHsfg+WlysDWJcmthjsjQ==",
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/dotenv": {
      "version": "16.6.1",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.6.1.tgz",
      "integrity": "sha512-uBq4egWHTcTt33a72vpSG0z3HnPuIl6NqYcTrKEg2azoEyl2hpW0zqlxysq2pK9HlDIHyHyakeYaYnSAwd8bow==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fastq": {
      "version": "1.19.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.19.1.tgz",
      "integrity": "sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==",
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/gaxios": {
      "version": "6.7.1",
      "resolved": "https://registry.npmjs.org/gaxios/-/gaxios-6.7.1.tgz",
      "integrity": "sha512-LDODD4TMYx7XXdpwxAVRAIAuB0bzv0s+ywFonY46k126qzQHT9ygyoa9tncmOiQmmDrik65UYsEkv3lbfqQ3yQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "extend": "^3.0.2",
        "https-proxy-agent": "^7.0.1",
        "is-stream": "^2.0.0",
        "node-fetch": "^2.6.9",
        "uuid": "^9.0.1"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/gcp-metadata": {
      "version": "6.1.1",
      "resolved": "https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-6.1.1.tgz",
      "integrity": "sha512-a4tiq7E0/5fTjxPAaH4jpjkSv/uCaU2p5KC6HVGrvl0cDjA8iBZv4vv1gyzlmK0ZUKqwpOyQMKzZQe3lTit77A==",
      "license": "Apache-2.0",
      "dependencies": {
        "gaxios": "^6.1.1",
        "google-logging-utils": "^0.0.2",
        "json-bigint": "^1.0.0"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/google-auth-library": {
      "version": "9.15.1",
      "resolved": "https://registry.npmjs.org/google-auth-library/-/google-auth-library-9.15.1.tgz",
      "integrity": "sha512-Jb6Z0+nvECVz+2lzSMt9u98UsoakXxA2HGHMCxh+so3n90XgYWkq5dur19JAJV7ONiJY22yBTyJB1TSkvPq9Ng==",
      "license": "Apache-2.0",
      "dependencies": {
        "base64-js": "^1.3.0",
        "ecdsa-sig-formatter": "^1.0.11",
        "gaxios": "^6.1.1",
        "gcp-metadata": "^6.1.0",
        "gtoken": "^7.0.0",
        "jws": "^4.0.0"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/google-logging-utils": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/google-logging-utils/-/google-logging-utils-0.0.2.tgz",
      "integrity": "sha512-NEgUnEcBiP5HrPzufUkBzJOD/Sxsco3rLNo1F1TNf7ieU8ryUzBhqba8r756CjLX7rn3fHl6iLEwPYuqpoKgQQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/gtoken": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/gtoken/-/gtoken-7.1.0.tgz",
      "integrity": "sha512-pCcEwRi+TKpMlxAQObHDQ56KawURgyAf6jtIY046fJ5tIv3zDe/LEIubckAO8fj6JnAxLdmWkUfNyulQ2iKdEw==",
      "license": "MIT",
      "dependencies": {
        "gaxios": "^6.0.0",
        "jws": "^4.0.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz",
      "integrity": "sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==",
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-stream": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
      "integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/json-bigint": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-bigint/-/json-bigint-1.0.0.tgz",
      "integrity": "sha512-SiPv/8VpZuWbvLSMtTDU8hEfrZWg/mH/nV/b4o0CYbSxu1UIQPLdwKOCIyLQX+VIPO5vrLX3i8qtqFyhdPSUSQ==",
      "license": "MIT",
      "dependencies": {
        "bignumber.js": "^9.0.0"
      }
    },
    "node_modules/jwa": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-2.0.1.tgz",
      "integrity": "sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg==",
      "license": "MIT",
      "dependencies": {
        "buffer-equal-constant-time": "^1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/jws": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/jws/-/jws-4.0.0.tgz",
      "integrity": "sha512-KDncfTmOZoOMTFG4mBlG0qUIOlc03fmzH+ru6RgYVZhPkyiy/92Owlt/8UEN+a4TXR1FQetfIpJE8ApdvdVxTg==",
      "license": "MIT",
      "dependencies": {
        "jwa": "^2.0.0",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.1.tgz",
      "integrity": "sha512-xRc4oEhT6eaBpU1XF7AjpOFD+xQmXNB5OVKwp4tqCuBpHLS/ZbBDrc07mYTDqVMg6PfxUjjNp85O6Cd2Z/5HWA==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/node-fetch": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.7.0.tgz",
      "integrity": "sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==",
      "license": "MIT",
      "dependencies": {
        "whatwg-url": "^5.0.0"
      },
      "engines": {
        "node": "4.x || >=6.0.0"
      },
      "peerDependencies": {
        "encoding": "^0.1.0"
      },
      "peerDependenciesMeta": {
        "encoding": {
          "optional": true
        }
      }
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/prompt-sync": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/prompt-sync/-/prompt-sync-4.2.0.tgz",
      "integrity": "sha512-BuEzzc5zptP5LsgV5MZETjDaKSWfchl5U9Luiu8SKp7iZWD5tZalOxvNcZRwv+d2phNFr8xlbxmFNcRKfJOzJw==",
      "license": "MIT",
      "dependencies": {
        "strip-ansi": "^5.0.0"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/strip-ansi": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^4.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/tr46": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
      "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==",
      "license": "MIT"
    },
    "node_modules/uuid": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
      "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
      "funding": [
        "https://github.com/sponsors/broofa",
        "https://github.com/sponsors/ctavan"
      ],
      "license": "MIT",
      "bin": {
        "uuid": "dist/bin/uuid"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
      "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==",
      "license": "BSD-2-Clause"
    },
    "node_modules/whatwg-url": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
      "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
      "license": "MIT",
      "dependencies": {
        "tr46": "~0.0.3",
        "webidl-conversions": "^3.0.0"
      }
    },
    "node_modules/ws": {
      "version": "8.18.3",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.18.3.tgz",
      "integrity": "sha512-PEIGCY5tSlUt50cqyMXfCzX+oOPqN0vuGqWzbcJ2xvnkzkq46oOpz7dQaTDBdfICb4N14+GARUDw2XV2N4tvzg==",
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/zod": {
      "version": "3.25.76",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.25.76.tgz",
      "integrity": "sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-to-json-schema": {
      "version": "3.24.6",
      "resolved": "https://registry.npmjs.org/zod-to-json-schema/-/zod-to-json-schema-3.24.6.tgz",
      "integrity": "sha512-h/z3PKvcTcTetyjl1fkj79MHNEjm+HpD6NXheWjzOekY7kV+lwDYnHw+ivHkijnCSMz1yJaWBD9vu/Fcmk+vEg==",
      "license": "ISC",
      "peerDependencies": {
        "zod": "^3.24.1"
      }
    }
  }
}

```

---

---

_lokasi_

generator-kode/package.json

_isi konten_

```
{
  "name": "gen-kode",
  "version": "1.1.0",
  "description": "Alat generator dan perbaikan kode proyek bertenaga AI.",
  "main": "app.js",
  "scripts": {
    "start": "node src/_app.js"
  },
  "keywords": [
    "generator",
    "kode",
    "gemini",
    "ai",
    "refactor"
  ],
  "author": "waone",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "@google/genai": "^0.12.0",
    "dotenv": "^16.5.0",
    "fast-glob": "^3.3.3",
    "prompt-sync": "^4.2.0"
  }
}

```

---

---

_lokasi_

generator-kode/readme.md

_isi konten_

````
# Generator-Kode: Generator & Refactor Kode Cerdas Berbasis AI

Generator-Kode adalah sebuah alat baris perintah (CLI) untuk membantu developer mempercepat alur kerja mereka, baik dalam membuat struktur proyek baru dari awal maupun melakukan refactoring pada proyek yang sudah ada berdasarkan instruksi, dengan bertenaga mesin model Gemini.

## Fitur Utama

- **Pembuatan Proyek Baru**: Hasilkan seluruh struktur folder dan file untuk proyek baru (misalnya, "buatkan saya API server Express dengan TypeScript") hanya dengan satu perintah.
- **Refactoring & Perbaikan Proyek**: Analisis kode proyek yang ada dan terapkan perubahan, tambahkan fitur baru, atau perbaiki bug sesuai instruksi Anda.
- **Pembacaan Proyek Selektif**: Kontrol penuh atas file mana yang dianalisis oleh AI, dengan mode inklusi (hanya baca yang dipilih) atau eksklusi (abaikan yang dipilih).
- **Riwayat Percakapan Berkonteks**: Menyimpan dan menggunakan kembali riwayat interaksi dengan AI, memungkinkan Anda untuk melakukan koreksi berulang hingga hasil yang diinginkan tercapai.
- **Konfigurasi Fleksibel**: Mudah untuk mengkonfigurasi model AI, temperature, dan parameter lainnya melalui file `.env`.
- **Dukungan Prompt Eksternal**: Gunakan file `prompt.txt` untuk instruksi yang lebih panjang dan kompleks, ideal untuk tugas yang rumit.

## Prasyarat

- [Node.js](https://nodejs.org/) (versi 18.x atau lebih tinggi)
- API Key dari [Google AI Studio](https://aistudio.google.com/app/apikey)

## Instalasi & Konfigurasi

Ikuti langkah-langkah berikut untuk menjalankan Gen-Kode di mesin lokal Anda.

**1. Clone Repositori**

```bash
git clone https://github.com/waone377/generator-kode.git
cd generator-kode
````

**2. Instal Dependensi**

```bash
npm install
```

**3. Konfigurasi Environment Variable**

Buat file baru bernama `.env` di root direktori proyek. Salin konten di bawah ini dan isi nilainya sesuai dengan konfigurasi Anda.

```env
GEMINI_API=?
MODEL=gemini-2.5-pro
TEMPERATURE=0.9
PEMIKIRAN=23000
MAX_OUTPUT=15000
```

- `GEMINI_API`: Kunci API Anda dari Google AI Studio. **Wajib diisi.**
- `MODEL`: Model Gemini yang ingin Anda gunakan. `gemini-2.5-flash` atau `gemini-2.5-pro` adalah pilihan yang solid dan direkomendasikan.
- `TEMPERATURE`: Mengontrol kreativitas output (0.0 - 2.0). Nilai yang lebih tinggi (misalnya, 0.9) menghasilkan output yang lebih beragam, sementara nilai yang lebih rendah (misalnya, 0.2) lebih fokus dan deterministik.
- `PEMIKIRAN`: Alokasi token untuk proses "berpikir" internal model sebelum menghasilkan respons.
- `MAX_OUTPUT`: Jumlah maksimum token yang dapat dihasilkan oleh model dalam satu respons.

## Cara Penggunaan

Jalankan aplikasi dari terminal:

```bash
npm start
```

Anda akan disambut dengan menu utama untuk memilih mode operasi.

### Mode 1: Membuat Project Baru

Ideal untuk memulai proyek dari nol berdasarkan deskripsi konseptual.

1.  Pilih menu `1`.
2.  Tentukan apakah akan menggunakan `prompt.txt` untuk deskripsi yang detail atau mengetik langsung di terminal.
3.  Setelah AI memproses permintaan, masukkan nama untuk folder proyek baru.
4.  Proyek akan dibuat di dalam direktori `output/<nama-proyek>`.

### Mode 2: Memperbaiki Project

Digunakan untuk memodifikasi, menambah fitur, atau memperbaiki kode pada proyek yang sudah ada.

1.  Pilih menu `2`.
2.  Masukkan path ke direktori proyek yang akan diperbaiki. Aplikasi akan mengingat path terakhir yang Anda gunakan.
3.  **Pilih Mode Pembacaan Source**:
    - **Inklusi (Sertakan)**: Mode ini hanya akan menganalisis file/folder yang Anda tentukan secara spesifik. Berguna untuk perbaikan yang sangat terfokus.
    - **Eksklusi (Kecualikan)**: Mode ini akan membaca seluruh proyek dan mengabaikan file/folder yang Anda tentukan. Direkomendasikan untuk pemahaman konteks yang lebih luas.
4.  Berikan instruksi perbaikan, baik melalui `prompt.txt` atau input langsung.
5.  Setelah AI memberikan solusi, pilih mode penyimpanan:
    - **Timpa project asli**: Menerapkan perubahan langsung ke proyek sumber.
    - **Membuat project baru**: Menyimpan versi yang telah diperbaiki sebagai proyek baru di dalam direktori `output/`.

### Mode 3: Hapus Riwayat

Opsi ini akan menghapus semua riwayat percakapan yang tersimpan di `history/riwayat.json` untuk memulai sesi baru yang bersih.

## Struktur Proyek

- `src/_app.js`: Titik masuk utama aplikasi, mengelola alur menu utama.
- `src/config/`: Direktori untuk file konfigurasi statis.
  - `ignore.js`: Daftar default file, folder, dan ekstensi yang diabaikan saat membaca proyek.
- `src/dok/`: Berisi file teks yang digunakan sebagai instruksi sistem untuk AI.
  - `intruksi.txt`: Instruksi inti peran dan format output AI.
- `src/fitur/`: Modul yang mengelola fitur utama aplikasi.
  - `pembuatan.js`: Mengelola logika untuk mode "Membuat Project Baru".
  - `perbaikan.js`: Mengelola logika untuk mode "Memperbaiki Project".
  - `penghapusan.js`: Mengelola logika untuk mode "Hapus Riwayat".
- `src/mesin/`: Modul inti untuk interaksi dengan AI Gemini.
  - `configurasi.js`: Menginisialisasi model Google Gemini dengan konfigurasi dari `.env`.
  - `gemini.js`: Mengirim permintaan ke model AI, mengelola riwayat sesi, dan menangani koreksi.
  - `schema.js`: Mendefinisikan skema JSON yang diharapkan dari respons AI.
- `src/service/`: Modul untuk logika bisnis spesifik.
  - `generate_repo.js`: Menerapkan output JSON dari AI ke sistem file (membuat/menghapus file/folder).
  - `read_repo.js`: Membaca struktur dan konten proyek target menjadi format markdown.
- `src/util/`: Modul utilitas pembantu.
  - `files.js`: Menangani operasi file system seperti membaca, menulis, dan menghapus.
  - `input.js`: Mengelola interaksi dengan pengguna di terminal.
  - `tampilan.js`: Mengelola output ke terminal.
- `history/`: (Dibuat saat runtime) Direktori untuk menyimpan data sesi.
  - `riwayat.json`: Menyimpan riwayat percakapan dengan AI.
  - `target.json`: Menyimpan path direktori terakhir yang digunakan dalam mode perbaikan.
  - `output.json`: Menyimpan output JSON mentah terakhir dari AI.
- `output/`: Direktori default tempat proyek baru atau yang diperbaiki disimpan.
- `package.json`: Mendefinisikan metadata proyek, dependensi, dan skrip.
- `prompt.txt`: Tempat untuk menulis instruksi/prompt yang panjang atau kompleks untuk AI.
- `.gitignore`: Mengabaikan file dan folder yang tidak perlu dilacak oleh Git.
- `readme.md`: Dokumentasi proyek ini.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Ini berarti Anda bebas menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan/atau menjual salinan perangkat lunak, selama Anda menyertakan pemberitahuan hak cipta dan izin asli dalam semua salinan atau bagian penting dari perangkat lunak.

```

---

---

*lokasi*

generator-kode/history/output.json

*isi konten*

```

{
"repo": [
{
"jenis": "dok",
"lokasi": "readme.md",
"konten": "# Generator-Kode: Generator & Refactor Kode Cerdas Berbasis AI\n\nGenerator-Kode adalah sebuah alat baris perintah (CLI) untuk membantu developer mempercepat alur kerja mereka, baik dalam membuat struktur proyek baru dari awal maupun melakukan refactoring pada proyek yang sudah ada berdasarkan instruksi, dengan bertenaga mesin model Gemini.\n\n## Fitur Utama\n\n- **Pembuatan Proyek Baru**: Hasilkan seluruh struktur folder dan file untuk proyek baru (misalnya, \"buatkan saya API server Express dengan TypeScript\") hanya dengan satu perintah.\n- **Refactoring & Perbaikan Proyek**: Analisis kode proyek yang ada dan terapkan perubahan, tambahkan fitur baru, atau perbaiki bug sesuai instruksi Anda.\n- **Pembacaan Proyek Selektif**: Kontrol penuh atas file mana yang dianalisis oleh AI, dengan mode inklusi (hanya baca yang dipilih) atau eksklusi (abaikan yang dipilih).\n- **Riwayat Percakapan Berkonteks**: Menyimpan dan menggunakan kembali riwayat interaksi dengan AI, memungkinkan Anda untuk melakukan koreksi berulang hingga hasil yang diinginkan tercapai.\n- **Konfigurasi Fleksibel**: Mudah untuk mengkonfigurasi model AI, temperature, dan parameter lainnya melalui file `.env`.\n- **Dukungan Prompt Eksternal**: Gunakan file `prompt.txt` untuk instruksi yang lebih panjang dan kompleks, ideal untuk tugas yang rumit.\n\n## Prasyarat\n\n- [Node.js](https://nodejs.org/) (versi 18.x atau lebih tinggi)\n- API Key dari [Google AI Studio](https://aistudio.google.com/app/apikey)\n\n## Instalasi & Konfigurasi\n\nIkuti langkah-langkah berikut untuk menjalankan Gen-Kode di mesin lokal Anda.\n\n**1. Clone Repositori**\n\n`bash\ngit clone https://github.com/waone377/generator-kode.git\ncd generator-kode\n`\n\n**2. Instal Dependensi**\n\n`bash\nnpm install\n`\n\n**3. Konfigurasi Environment Variable**\n\nBuat file baru bernama `.env` di root direktori proyek. Salin konten di bawah ini dan isi nilainya sesuai dengan konfigurasi Anda.\n\n`env\nGEMINI_API=?\nMODEL=gemini-2.5-pro\nTEMPERATURE=0.9\nPEMIKIRAN=23000\nMAX_OUTPUT=15000\n`\n\n- `GEMINI_API`: Kunci API Anda dari Google AI Studio. **Wajib diisi.**\n- `MODEL`: Model Gemini yang ingin Anda gunakan. `gemini-2.5-flash` atau `gemini-2.5-pro` adalah pilihan yang solid dan direkomendasikan.\n- `TEMPERATURE`: Mengontrol kreativitas output (0.0 - 2.0). Nilai yang lebih tinggi (misalnya, 0.9) menghasilkan output yang lebih beragam, sementara nilai yang lebih rendah (misalnya, 0.2) lebih fokus dan deterministik.\n- `PEMIKIRAN`: Alokasi token untuk proses \"berpikir\" internal model sebelum menghasilkan respons.\n- `MAX_OUTPUT`: Jumlah maksimum token yang dapat dihasilkan oleh model dalam satu respons.\n\n## Cara Penggunaan\n\nJalankan aplikasi dari terminal:\n\n`bash\nnpm start\n`\n\nAnda akan disambut dengan menu utama untuk memilih mode operasi.\n\n### Mode 1: Membuat Project Baru\n\nIdeal untuk memulai proyek dari nol berdasarkan deskripsi konseptual.\n\n1. Pilih menu `1`.\n2. Tentukan apakah akan menggunakan `prompt.txt` untuk deskripsi yang detail atau mengetik langsung di terminal.\n3. Setelah AI memproses permintaan, masukkan nama untuk folder proyek baru.\n4. Proyek akan dibuat di dalam direktori `output/<nama-proyek>`.\n\n### Mode 2: Memperbaiki Project\n\nDigunakan untuk memodifikasi, menambah fitur, atau memperbaiki kode pada proyek yang sudah ada.\n\n1. Pilih menu `2`.\n2. Masukkan path ke direktori proyek yang akan diperbaiki. Aplikasi akan mengingat path terakhir yang Anda gunakan.\n3. **Pilih Mode Pembacaan Source**:\n - **Inklusi (Sertakan)**: Mode ini hanya akan menganalisis file/folder yang Anda tentukan secara spesifik. Berguna untuk perbaikan yang sangat terfokus.\n - **Eksklusi (Kecualikan)**: Mode ini akan membaca seluruh proyek dan mengabaikan file/folder yang Anda tentukan. Direkomendasikan untuk pemahaman konteks yang lebih luas.\n4. Berikan instruksi perbaikan, baik melalui `prompt.txt` atau input langsung.\n5. Setelah AI memberikan solusi, pilih mode penyimpanan:\n - **Timpa project asli**: Menerapkan perubahan langsung ke proyek sumber.\n - **Membuat project baru**: Menyimpan versi yang telah diperbaiki sebagai proyek baru di dalam direktori `output/`.\n\n### Mode 3: Hapus Riwayat\n\nOpsi ini akan menghapus semua riwayat percakapan yang tersimpan di `history/riwayat.json` untuk memulai sesi baru yang bersih.\n\n## Struktur Proyek\n\n- `src/_app.js`: Titik masuk utama aplikasi, mengelola alur menu utama.\n- `src/config/`: Direktori untuk file konfigurasi statis.\n - `ignore.js`: Daftar default file, folder, dan ekstensi yang diabaikan saat membaca proyek.\n- `src/dok/`: Berisi file teks yang digunakan sebagai instruksi sistem untuk AI.\n - `intruksi.txt`: Instruksi inti peran dan format output AI.\n- `src/fitur/`: Modul yang mengelola fitur utama aplikasi.\n - `pembuatan.js`: Mengelola logika untuk mode \"Membuat Project Baru\".\n - `perbaikan.js`: Mengelola logika untuk mode \"Memperbaiki Project\".\n - `penghapusan.js`: Mengelola logika untuk mode \"Hapus Riwayat\".\n- `src/mesin/`: Modul inti untuk interaksi dengan AI Gemini.\n - `configurasi.js`: Menginisialisasi model Google Gemini dengan konfigurasi dari `.env`.\n - `gemini.js`: Mengirim permintaan ke model AI, mengelola riwayat sesi, dan menangani koreksi.\n - `schema.js`: Mendefinisikan skema JSON yang diharapkan dari respons AI.\n- `src/service/`: Modul untuk logika bisnis spesifik.\n - `generate_repo.js`: Menerapkan output JSON dari AI ke sistem file (membuat/menghapus file/folder).\n - `read_repo.js`: Membaca struktur dan konten proyek target menjadi format markdown.\n- `src/util/`: Modul utilitas pembantu.\n - `files.js`: Menangani operasi file system seperti membaca, menulis, dan menghapus.\n - `input.js`: Mengelola interaksi dengan pengguna di terminal.\n - `tampilan.js`: Mengelola output ke terminal.\n- `history/`: (Dibuat saat runtime) Direktori untuk menyimpan data sesi.\n - `riwayat.json`: Menyimpan riwayat percakapan dengan AI.\n - `target.json`: Menyimpan path direktori terakhir yang digunakan dalam mode perbaikan.\n - `output.json`: Menyimpan output JSON mentah terakhir dari AI.\n- `output/`: Direktori default tempat proyek baru atau yang diperbaiki disimpan.\n- `package.json`: Mendefinisikan metadata proyek, dependensi, dan skrip.\n- `prompt.txt`: Tempat untuk menulis instruksi/prompt yang panjang atau kompleks untuk AI.\n- `.gitignore`: Mengabaikan file dan folder yang tidak perlu dilacak oleh Git.\n- `readme.md`: Dokumentasi proyek ini.\n\n## Lisensi\n\nProyek ini dilisensikan di bawah Lisensi MIT. Ini berarti Anda bebas menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan/atau menjual salinan perangkat lunak, selama Anda menyertakan pemberitahuan hak cipta dan izin asli dalam semua salinan atau bagian penting dari perangkat lunak.\n"
}
],
"text": "Perubahan telah dilakukan pada file dokumentasi `readme.md`. Bagian 'Lisensi' telah diperbarui dari Lisensi ISC menjadi Lisensi MIT, yang merupakan lisensi open-source yang permisif dan umum digunakan. Penjelasan singkat mengenai kebebasan yang diberikan oleh lisensi MIT juga ditambahkan untuk memperjelas status open-source dari proyek ini.",
"delets": []
}

```

---

---

*lokasi*

generator-kode/history/riwayat.json

*isi konten*

```

[
{
"role": "user",
"parts": [
{
"text": "cermatilah repositori project saya ini dengan teliti:\n\n---\n\n*lokasi*\n\ngenerator-kode/package-lock.json\n\n*isi konten*\n\n[object Object]\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/package.json\n\n*isi konten*\n\n[object Object]\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/readme.md\n\n*isi konten*\n\n# Generator-Kode: Generator & Refactor Kode Cerdas Berbasis AI\n\nGenerator-Kode adalah sebuah alat baris perintah (CLI) untuk membantu developer mempercepat alur kerja mereka, baik dalam membuat struktur proyek baru dari awal maupun melakukan refactoring pada proyek yang sudah ada berdasarkan instruksi, dengan bertenaga mesin model Gemini.\n\n## Fitur Utama\n\n- **Pembuatan Proyek Baru**: Hasilkan seluruh struktur folder dan file untuk proyek baru (misalnya, \"buatkan saya API server Express dengan TypeScript\") hanya dengan satu perintah.\n- **Refactoring & Perbaikan Proyek**: Analisis kode proyek yang ada dan terapkan perubahan, tambahkan fitur baru, atau perbaiki bug sesuai instruksi Anda.\n- **Pembacaan Proyek Selektif**: Kontrol penuh atas file mana yang dianalisis oleh AI, dengan mode inklusi (hanya baca yang dipilih) atau eksklusi (abaikan yang dipilih).\n- **Riwayat Percakapan Berkonteks**: Menyimpan dan menggunakan kembali riwayat interaksi dengan AI, memungkinkan Anda untuk melakukan koreksi berulang hingga hasil yang diinginkan tercapai.\n- **Konfigurasi Fleksibel**: Mudah untuk mengkonfigurasi model AI, temperature, dan parameter lainnya melalui file `.env`.\n- **Dukungan Prompt Eksternal**: Gunakan file `prompt.txt` untuk instruksi yang lebih panjang dan kompleks, ideal untuk tugas yang rumit.\n\n## Prasyarat\n\n- [Node.js](https://nodejs.org/) (versi 18.x atau lebih tinggi)\n- API Key dari [Google AI Studio](https://aistudio.google.com/app/apikey)\n\n## Instalasi & Konfigurasi\n\nIkuti langkah-langkah berikut untuk menjalankan Gen-Kode di mesin lokal Anda.\n\n**1. Clone Repositori**\n\n`bash\ngit clone https://github.com/waone377/generator-kode.git\ncd generator-kode\n`\n\n**2. Instal Dependensi**\n\n`bash\nnpm install\n`\n\n**3. Konfigurasi Environment Variable**\n\nBuat file baru bernama `.env` di root direktori proyek. Salin konten di bawah ini dan isi nilainya sesuai dengan konfigurasi Anda.\n\n`env\nGEMINI_API=?\nMODEL=gemini-2.5-pro\nTEMPERATURE=0.9\nPEMIKIRAN=23000\nMAX_OUTPUT=15000\n`\n\n- `GEMINI_API`: Kunci API Anda dari Google AI Studio. **Wajib diisi.**\n- `MODEL`: Model Gemini yang ingin Anda gunakan. `gemini-2.5-flash` atau `gemini-2.5-pro` adalah pilihan yang solid dan direkomendasikan.\n- `TEMPERATURE`: Mengontrol kreativitas output (0.0 - 2.0). Nilai yang lebih tinggi (misalnya, 0.9) menghasilkan output yang lebih beragam, sementara nilai yang lebih rendah (misalnya, 0.2) lebih fokus dan deterministik.\n- `PEMIKIRAN`: Alokasi token untuk proses \"berpikir\" internal model sebelum menghasilkan respons.\n- `MAX_OUTPUT`: Jumlah maksimum token yang dapat dihasilkan oleh model dalam satu respons.\n\n## Cara Penggunaan\n\nJalankan aplikasi dari terminal:\n\n`bash\nnpm start\n`\n\nAnda akan disambut dengan menu utama untuk memilih mode operasi.\n\n### Mode 1: Membuat Project Baru\n\nIdeal untuk memulai proyek dari nol berdasarkan deskripsi konseptual.\n\n1. Pilih menu `1`.\n2. Tentukan apakah akan menggunakan `prompt.txt` untuk deskripsi yang detail atau mengetik langsung di terminal.\n3. Setelah AI memproses permintaan, masukkan nama untuk folder proyek baru.\n4. Proyek akan dibuat di dalam direktori `output/<nama-proyek>`.\n\n### Mode 2: Memperbaiki Project\n\nDigunakan untuk memodifikasi, menambah fitur, atau memperbaiki kode pada proyek yang sudah ada.\n\n1. Pilih menu `2`.\n2. Masukkan path ke direktori proyek yang akan diperbaiki. Aplikasi akan mengingat path terakhir yang Anda gunakan.\n3. **Pilih Mode Pembacaan Source**:\n - **Inklusi (Sertakan)**: Mode ini hanya akan menganalisis file/folder yang Anda tentukan secara spesifik. Berguna untuk perbaikan yang sangat terfokus.\n - **Eksklusi (Kecualikan)**: Mode ini akan membaca seluruh proyek dan mengabaikan file/folder yang Anda tentukan. Direkomendasikan untuk pemahaman konteks yang lebih luas.\n4. Berikan instruksi perbaikan, baik melalui `prompt.txt` atau input langsung.\n5. Setelah AI memberikan solusi, pilih mode penyimpanan:\n - **Timpa project asli**: Menerapkan perubahan langsung ke proyek sumber.\n - **Membuat project baru**: Menyimpan versi yang telah diperbaiki sebagai proyek baru di dalam direktori `output/`.\n\n### Mode 3: Hapus Riwayat\n\nOpsi ini akan menghapus semua riwayat percakapan yang tersimpan di `history/riwayat.json` untuk memulai sesi baru yang bersih.\n\n## Struktur Proyek\n\n- `src/_app.js`: Titik masuk utama aplikasi, mengelola alur menu utama.\n- `src/config/`: Direktori untuk file konfigurasi statis.\n - `ignore.js`: Daftar default file, folder, dan ekstensi yang diabaikan saat membaca proyek.\n- `src/dok/`: Berisi file teks yang digunakan sebagai instruksi sistem untuk AI.\n - `intruksi.txt`: Instruksi inti peran dan format output AI.\n- `src/fitur/`: Modul yang mengelola fitur utama aplikasi.\n - `pembuatan.js`: Mengelola logika untuk mode \"Membuat Project Baru\".\n - `perbaikan.js`: Mengelola logika untuk mode \"Memperbaiki Project\".\n - `penghapusan.js`: Mengelola logika untuk mode \"Hapus Riwayat\".\n- `src/mesin/`: Modul inti untuk interaksi dengan AI Gemini.\n - `configurasi.js`: Menginisialisasi model Google Gemini dengan konfigurasi dari `.env`.\n - `gemini.js`: Mengirim permintaan ke model AI, mengelola riwayat sesi, dan menangani koreksi.\n - `schema.js`: Mendefinisikan skema JSON yang diharapkan dari respons AI.\n- `src/service/`: Modul untuk logika bisnis spesifik.\n - `generate_repo.js`: Menerapkan output JSON dari AI ke sistem file (membuat/menghapus file/folder).\n - `read_repo.js`: Membaca struktur dan konten proyek target menjadi format markdown.\n- `src/util/`: Modul utilitas pembantu.\n - `files.js`: Menangani operasi file system seperti membaca, menulis, dan menghapus.\n - `input.js`: Mengelola interaksi dengan pengguna di terminal.\n - `tampilan.js`: Mengelola output ke terminal.\n- `history/`: (Dibuat saat runtime) Direktori untuk menyimpan data sesi.\n - `riwayat.json`: Menyimpan riwayat percakapan dengan AI.\n - `target.json`: Menyimpan path direktori terakhir yang digunakan dalam mode perbaikan.\n - `output.json`: Menyimpan output JSON mentah terakhir dari AI.\n- `output/`: Direktori default tempat proyek baru atau yang diperbaiki disimpan.\n- `package.json`: Mendefinisikan metadata proyek, dependensi, dan skrip.\n- `prompt.txt`: Tempat untuk menulis instruksi/prompt yang panjang atau kompleks untuk AI.\n- `.gitignore`: Mengabaikan file dan folder yang tidak perlu dilacak oleh Git.\n- `readme.md`: Dokumentasi proyek ini.\n\n## Lisensi\n\nProyek ini dilisensikan di bawah Lisensi ISC.\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/_app.js\n\n*isi konten*\n\nimport Print from \"./util/tampilan.js\";\nimport Masukan from \"./util/input.js\";\nimport pembuatan from \"./fitur/pembuatan.js\";\nimport perbaikan from \"./fitur/perbaikan.js\";\nimport penghapusan from \"./fitur/penghapusan.js\";\nimport setup from \"./config/setup.js\";\n\nasync function main() {\n try {\n await setup();\n while (true) {\n Print.clear(\n \"SELAMAT DATANG!\\nsilahkan pilih:\\n1. buat projek\\n2. perbaiki projek\\n3. hapus riwayat\\n\",\n );\n Print.log(\"ketik 'exit' untuk stop..\");\n const pilih = Masukan.pilih(\"silakan pilih (1/2/3)?> \", [\"1\", \"2\", \"3\"]);\n switch (pilih) {\n case \"1\":\n await pembuatan();\n break;\n case \"2\":\n await perbaikan();\n break;\n case \"3\":\n await penghapusan();\n break;\n }\n const next = Masukan.pilih(\"lanjutkan program (y/n)?> \", [\"y\", \"n\"]);\n if (next === \"y\") continue;\n Print.log(\"program telah berhenti...\");\n break;\n }\n } catch (err) {\n Print.clear(\"Oops error..\\n terjadi error; \\n\", err.message);\n }\n}\nmain();\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/config/ignore.js\n\n*isi konten*\n\nconst eee = {\n folder: [\n \"node_modules\",\n \".git\",\n \".vscode\",\n \".idea\",\n \"__pycache__\",\n \"vendor\",\n \"dist\",\n \"build\",\n ],\n file: [\".env\"],\n extensi: [\n \".csv\",\n \".jpg\",\n \".jpeg\",\n \".png\",\n \".gif\",\n \".bmp\",\n \".svg\",\n \".webp\",\n \".ico\",\n \".mp3\",\n \".wav\",\n \".ogg\",\n \".flac\",\n \".aac\",\n \".mp4\",\n \".mov\",\n \".avi\",\n \".mkv\",\n \".webm\",\n \".zip\",\n \".rar\",\n \".7z\",\n \".tar\",\n \".gz\",\n \".woff\",\n \".woff2\",\n \".ttf\",\n \".otf\",\n \".eot\",\n \".lock\",\n \".log\",\n \".pdf\",\n \".doc\",\n \".docx\",\n \".xls\",\n \".xlsx\",\n \".ppt\",\n \".pptx\",\n \".exe\",\n \".dll\",\n \".so\",\n \".class\",\n \".pyc\",\n \".jar\",\n \".bin\",\n \".img\",\n \".iso\",\n ],\n};\nexport default eee;\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/config/setup.js\n\n*isi konten*\n\nimport path from \"path\";\nimport { cekAda, tulisFile, buatFolder } from \"../util/files.js\";\nconst folder = \"history\";\nconst dataSetup = {\n \"target.json\": \"{}\",\n \"riwayat.json\": \"[]\",\n \"output.json\": \"{}\",\n};\nasync function setup() {\n try {\n try {\n await cekAda(folder);\n } catch {\n await buatFolder(folder);\n }\n for (const [name, value] of Object.entries(dataSetup)) {\n const p = path.join(folder, name);\n try {\n await cekAda(p);\n } catch {\n await tulisFile(p, value);\n }\n }\n } catch (err) {\n throw new Error(err.message);\n }\n}\nexport default setup;\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/fitur/pembuatan.js\n\n*isi konten*\n\nimport genAi from \"../mesin/gemini.js\";\nimport Print from \"../util/tampilan.js\";\nimport generateRepo from \"../service/generate_repo.js\";\nimport Prompt from \"../service/opsi_prompt.js\";\n\nasync function pembuatan() {\n try {\n const prompt = await Prompt.pembuatan();\n const res = await genAi(prompt);\n await generateRepo(res, \"pembuatan\");\n } catch (err) {\n throw new Error(err.message);\n }\n}\n\nexport default pembuatan;\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/fitur/penghapusan.js\n\n*isi konten*\n\nimport { data, tulisFile } from \"../util/files.js\";\nimport Masukan from \"../util/input.js\";\nimport Print from \"../util/tampilan.js\";\n\nasync function penghapusan() {\n try {\n const { dataHistory } = await data();\n if (dataHistory.length > 0) {\n Print.clear(\"total riwayat -\", dataHistory.length / 2);\n const konfirmasi = Masukan.pilih(\"hapus riwayat sebelumnya (y/n)?> \", [\n \"y\",\n \"n\",\n ]);\n if (konfirmasi === \"y\") {\n await tulisFile(\"history/riwayat.json\", \"[]\");\n Print.clear(\"sukses semua riwayat telah dihapus!\");\n }\n } else {\n Print.clear(\"daftar riwayat masih kosong!\");\n }\n } catch (err) {\n throw new Error(err.message);\n }\n}\n\nexport default penghapusan;\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/fitur/perbaikan.js\n\n*isi konten*\n\nimport genAi from \"../mesin/gemini.js\";\nimport os from \"os\";\nimport path from \"path\";\nimport { data, tulisFile } from \"../util/files.js\";\nimport Masukan from \"../util/input.js\";\nimport Print from \"../util/tampilan.js\";\nimport readRepo from \"../service/read_repo.js\";\nimport generateRepo from \"../service/generate_repo.js\";\nimport Prompt from \"../service/opsi_prompt.js\";\nasync function perbaikan() {\n try {\n let target = \"\";\n const { dataTarget } = await data();\n\n if (dataTarget) {\n Print.clear(\"target history:\\n\", dataTarget);\n const pake = Masukan.pilih(\n \"gunakan lokasi repository terakhir tersebut (y/n)?> \",\n [\"y\", \"n\"],\n );\n target =\n pake === \"y\"\n ? dataTarget\n : Masukan.wajib(\"masukkan lokasi repository target?> \");\n } else {\n target = Masukan.wajib(\"masukkan lokasi repository target?> \");\n }\n\n let p = target;\n if (target.startsWith(\"~/\")) {\n p = path.join(os.homedir(), target.substr(2));\n }\n await tulisFile(\n \"history/target.json\",\n JSON.stringify({ target: path.resolve(p) }, null, 4),\n );\n const markdown = await readRepo(p);\n const prompt = await Prompt.perbaikan();\n const pesan = `cermatilah repositori project saya ini dengan teliti:${markdown}\\n\\n**tugasnya anda itu:**\\n\\n${prompt}`;\n const res = await genAi(pesan);\n await generateRepo(res, \"perbaikan\");\n } catch (err) {\n throw new Error(err.message);\n }\n}\nexport default perbaikan;\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/mesin/configurasi.js\n\n*isi konten*\n\nimport { GoogleGenAI } from \"@google/genai\";\nimport \"dotenv/config\";\nimport schema from \"./schema.js\";\nimport { data } from \"../util/files.js\";\n\nasync function configGenAi(isHistory = false) {\n try {\n const AI = new GoogleGenAI({ apiKey: process.env.GEMINI_API });\n let history = [];\n const { dataHistory, dataIntruksi } = await data();\n if (isHistory) {\n history = dataHistory;\n }\n const chat = AI.chats.create({\n model: process.env.MODEL,\n config: {\n temperature: process.env.TEMPERATURE,\n systemInstruction: dataIntruksi,\n thinkingConfig: {\n includeThoughts: true,\n thinkingBudget: process.env.PEMIKIRAN,\n },\n tools: [],\n responseMimeType: \"application/json\",\n responseSchema: schema,\n generationConfig: {\n maxOutputTokens: process.env.MAX_OUTPUT,\n presencePenalty: 8,\n frequencyPenalty: 16,\n enableEnhancedCivicAnswers: false,\n },\n },\n history: history,\n });\n return {\n model: chat,\n AI: AI,\n };\n } catch (err) {\n throw new Error(err.message);\n }\n}\n\nexport default configGenAi;\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/mesin/gemini.js\n\n*isi konten*\n\nimport configGenAi from \"./configurasi.js\";\nimport { tulisFile, data } from \"../util/files.js\";\nimport Masukan from \"../util/input.js\";\nimport Print from \"../util/tampilan.js\";\n\nasync function genAi(prompt) {\n let pakeHistory = \"y\";\n let isHistory = false;\n let pakePanduan = \"n\";\n let msg = [{ text: \"\" }];\n let history = [];\n let tambahan = true;\n let result = null;\n\n try {\n const { AI, model } = await configGenAi(isHistory);\n\n const { dataHistory } = await data();\n while (true) {\n if (tambahan) {\n msg[0].text = prompt;\n if (dataHistory.length > 0) {\n Print.clear(\"item history -\", dataHistory.length / 2);\n pakeHistory = Masukan.pilih(\"gunakan history sebelumnya (y/n)?> \", [\n \"y\",\n \"n\",\n ]);\n if (pakeHistory === \"y\") isHistory = true;\n }\n pakePanduan = Masukan.pilih(\"gunakan file panduan (y/n)?> \", [\n \"y\",\n \"n\",\n ]);\n if (pakePanduan === \"y\") {\n Print.clear(\"mencerna panduan...\");\n const eee = await AI.files.upload({\n file: \"src/dok/dokumentasi.txt\",\n displayName: \"sumber panduan\",\n });\n msg.push({\n fileData: {\n mimeType: eee.mimeType,\n fileUri: eee.uri,\n },\n });\n }\n }\n\n Print.clear(\"memproses permintaan silakan tunggu...\");\n const respons = await model.sendMessage({ message: msg });\n result = JSON.parse(respons.text);\n const resData = JSON.stringify(result, null, 2);\n Print.clear(\"Laporan:\\n***\\n\", result.text, \"\\n***\");\n history.push({\n role: \"user\",\n parts: msg,\n });\n history.push({\n role: \"model\",\n parts: [{ text: resData }],\n });\n const isKoreksi = Masukan.pilih(\"koreksi kembali hasil (y/n)?> \", [\n \"y\",\n \"n\",\n ]);\n if (isKoreksi === \"n\") {\n break;\n } else {\n const q = Masukan.wajib(\"apa yang ingin di betulkan?> \");\n msg[0].text = `outputnya masih kurang ${q} silakan revisi kembali`;\n isHistory = true;\n tambahan = false;\n }\n }\n\n const out = [...dataHistory, ...history];\n await tulisFile(\"history/riwayat.json\", JSON.stringify(out, null, 4));\n return result || null;\n } catch (err) {\n throw new Error(err.message);\n }\n}\n\nexport default genAi;\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/mesin/schema.js\n\n*isi konten*\n\nimport { Type } from \"@google/genai\";\n\nconst repoItemSchema = {\n type: Type.OBJECT,\n properties: {\n jenis: {\n type: Type.STRING,\n enum: [\"folder\", \"file\", \"dok\", \"config\"],\n description:\n \"Jenis komponen. 'folder' untuk direktori, 'file' untuk kode sumber, 'config' untuk file konfigurasi, 'dok' untuk dokumentasi.\",\n },\n lokasi: {\n type: Type.STRING,\n description:\n \"Path relatif dari root proyek, contoh: 'src/components/Button.js'. Gunakan garis miring '/' sebagai pemisah.\",\n pattern: \"^[a-zA-Z0-9._\\\\-/]+$\",\n    },\n    konten: {\n      type: Type.STRING,\n      description:\n        \"Isi konten lengkap untuk file. Untuk 'jenis: folder', nilai ini harus string kosong ''.\",\n    },\n  },\n  required: [\"jenis\", \"lokasi\", \"konten\"],\n};\n\nconst deleteItemSchema = {\n  type: Type.OBJECT,\n  properties: {\n    jenis: {\n      type: Type.STRING,\n      enum: [\"file\", \"folder\"],\n      description: \"Tipe entitas yang akan dihapus: 'file' atau 'folder'.\",\n    },\n    lokasi: {\n      type: Type.STRING,\n      description:\n        \"Path relatif dari root proyek untuk file/folder yang akan dihapus.\",\n      pattern: \"^[a-zA-Z0-9._\\\\-/]+$\",\n },\n },\n required: [\"jenis\", \"lokasi\"],\n};\n\nconst mainSchema = {\n type: Type.OBJECT,\n properties: {\n repo: {\n type: Type.ARRAY,\n description:\n \"Daftar semua file dan folder yang dibuat atau dimodifikasi. Jangan sertakan file yang tidak berubah.\",\n items: repoItemSchema,\n },\n delets: {\n type: Type.ARRAY,\n description:\n \"Daftar file atau folder yang perlu dihapus dari proyek. Jika tidak ada, gunakan array kosong [].\",\n items: deleteItemSchema,\n },\n text: {\n type: Type.STRING,\n description:\n \"Ringkasan teknis yang jelas dan profesional tentang perubahan yang dibuat, arsitektur yang diterapkan, dan keputusan teknis penting. seperti mana saja yang dirubah atau diperbaiki dan di mana saja yang dibuat).\",\n },\n },\n required: [\"repo\", \"text\"],\n};\n\nexport default mainSchema;\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/service/generate_repo.js\n\n*isi konten*\n\nimport path from \"path\";\nimport {\n cekAda,\n buatFolder,\n hapusFolder,\n hapusFile,\n tulisFile,\n data,\n} from \"../util/files.js\";\nimport Print from \"../util/tampilan.js\";\nimport Masukan from \"../util/input.js\";\nasync function generateRepo(source, mode) {\n try {\n const { dataTarget } = await data();\n const letak = dataTarget;\n const lokasi = path.join(path.resolve(\".\"), \"output\");\n let base = lokasi;\n if (mode === \"pembuatan\") {\n const nameRepo = Masukan.wajib(\"masukkan nama repository?> \");\n base = path.join(lokasi, nameRepo);\n await buatFolder(base);\n }\n if (mode === \"perbaikan\") {\n const opsi = Masukan.pilih(\n \"pilih penyimpanan:\\n1. timpa repository\\n2. buat repository\\nsilahkan pilih (1/2)?> \",\n [\"1\", \"2\"],\n );\n if (opsi === \"2\") {\n const nameRepo = Masukan.wajib(\"masukkan nama repository?> \");\n base = path.join(lokasi, nameRepo);\n await buatFolder(base);\n }\n base = letak;\n }\n const dir = base.split(\"/\").pop();\n Print.clear(mode, \"\\nvolder:\", dir, \"\\npath:\", base, \"\\n===\");\n try {\n await cekAda(lokasi);\n } catch {\n Print.log(\"folder output tidak ditemukan!, jadi membuat folder output\");\n await buatFolder(lokasi);\n Print.log(\"folder output telah dibuat..\");\n }\n if (source.delets.length > 0 && mode === \"perbaikan\") {\n for (const e of source.delets) {\n const p = path.join(path.resolve(base), e.lokasi);\n switch (e.jenis) {\n case \"folder\":\n await hapusFolder(p);\n Print.log(\"menghapus folder\", e.lokasi);\n break;\n case \"file\":\n await hapusFile(p);\n Print.log(\"menghapus file\", e.lokasi);\n break;\n default:\n Print.log(\"ada satu source yang tidak valid untuk dihapus!\");\n break;\n }\n }\n }\n // di luar kondisi delets\n if (source.repo) {\n for (const e of source.repo) {\n const p = path.join(path.resolve(base), e.lokasi);\n switch (e.jenis) {\n case \"folder\":\n await buatFolder(p);\n Print.log(\"membuat folder\", e.lokasi);\n break;\n case \"file\":\n await tulisFile(p, e.konten);\n Print.log(\"membuat file\", e.lokasi);\n break;\n case \"config\":\n await tulisFile(p, e.konten);\n Print.log(\"membuat file\", e.lokasi);\n break;\n case \"dok\":\n await tulisFile(p, e.konten);\n Print.log(\"membuat file\", e.lokasi);\n break;\n default:\n Print.log(\n \"ada satu source yang tidak valid untuk dibuat!\",\n e.lokasi,\n );\n break;\n }\n }\n }\n Print.log(\"sukses\", mode, \"telah dilakukan..\");\n await tulisFile(\"history/output.json\", JSON.stringify(source, null, 4));\n } catch (err) {\n throw new Error(err.message);\n }\n}\nexport default generateRepo;\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/service/opsi_prompt.js\n\n*isi konten*\n\nimport Print from \"../util/tampilan.js\";\nimport Masukan from \"../util/input.js\";\nimport { data } from \"../util/files.js\";\nclass Prompt {\n static async pembuatan() {\n const { dataPrompt } = await data();\n const pakePrompt = Masukan.pilih(\"gunakan prompt.txt (y/n)?> \", [\"y\", \"n\"]);\n let prompt = \"\";\n if (pakePrompt === \"y\") {\n prompt = dataPrompt;\n Print.clear(\"isi prompt:\\n**_\", prompt || \"kosong\", \"\\n_**\");\n const next = Masukan.pilih(\"lanjutkan (y/n)?> \", [\"y\", \"n\"]);\n if (next === \"n\") {\n prompt = Masukan.wajib(\"project seperti apa yang ingin dibuat?> \");\n }\n } else {\n prompt = Masukan.wajib(\"project seperti apa yang ingin dibuat?> \");\n }\n return prompt;\n }\n static async perbaikan() {\n const { dataPrompt } = await data();\n const pakePrompt = Masukan.pilih(\"gunakan prompt.txt (y/n)?> \", [\"y\", \"n\"]);\n let prompt = \"\";\n if (pakePrompt === \"y\") {\n prompt = dataPrompt;\n Print.clear(\"isi prompt:\\n**_\", prompt || \"kosong\", \"\\n_**\");\n const next = Masukan.pilih(\"lanjutkan (y/n)?> \", [\"y\", \"n\"]);\n if (next === \"n\") {\n prompt = Masukan.wajib(\"apa yang ingin diperbaiki?> \");\n }\n } else {\n prompt = Masukan.wajib(\"apa yang ingin diperbaiki?> \");\n }\n return prompt;\n }\n}\nexport default Prompt;\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/service/read_repo.js\n\n*isi konten*\n\nimport path from \"path\";\nimport { bacaFolder, bacaFile, tulisFile, cekAda } from \"../util/files.js\";\nimport Print from \"../util/tampilan.js\";\nimport Masukan from \"../util/input.js\";\nasync function readRepo(target) {\n try {\n const data = {\n folder: [],\n file: [],\n extensi: [],\n };\n const mode = Masukan.pilih(\n \"pilih pembacaan file & folder:\\n1. pilih beberapa\\n2. kecualikan beberapa\\nsilahkan pilih (1/2)?> \",\n [\"1\", \"2\"],\n );\n const text = mode === \"1\" ? \"dipilih\" : \"dikecualikan\";\n Masukan.pilih(\n \"jika folder/file/extensi/ lebih dari satu pisahkan dengan (,)\\ncontoh:\\nfolder: dist, node_modules\\nfile: example.js, config.json\\nextensi: .txt, .py\\n mengerti lanjut (y/n): \",\n [\"y\", \"n\"],\n );\n const foldernya = Masukan.biasa(\n `masukkan nama volder yang ingin ${text}?: `,\n );\n data.folder.push(foldernya.replaceAll(\" \", \"\").split(\",\"));\n const filenya = Masukan.biasa(\n `masukkan nama file yang ingin ${text} beserta extensinya?: `,\n );\n data.file.push(filenya.replaceAll(\" \", \"\").split(\",\"));\n const extensinya = Masukan.biasa(\n `masukkan format extensi yang ingin ${text}?: `,\n );\n data.extensi.push(extensinya.replaceAll(\" \", \"\").split(\",\"));\n const daftar = {\n foldernya: data.folder\n .flat()\n .filter((e) => e)\n .map((e) => `!${e}/**`),\n filenya: data.file\n .flat()\n .filter((e) => e)\n .map((e) => `!**/${e}`),\n extensinya: data.extensi\n .flat()\n .filter((e) => e)\n .map((e) => `!**/*.${e.replace(\".\", \"\")}`),\n };\n const repo = await bacaFolder(target, daftar, mode);\n const dir = target.split(\"/\").pop();\n Print.clear(\"membaca...\\nvolder:\", dir, \"\\npath:\", target, \"\\n===\");\n let markdown = \"\";\n for (const e of repo) {\n const letak = e.substring(e.indexOf(dir), e.length);\n Print.log(\"sedang membaca\", letak);\n const kode = await bacaFile(e);\n markdown += `\\n\\n---\\n\\n*lokasi*\\n\\n${letak}\\n\\n*isi konten*\\n\\n${kode}\\n\\n---`;\n }\n await tulisFile(\"history/repo.md\", markdown);\n Print.log(\"selesai terbaca\");\n return markdown;\n } catch (err) {\n throw new Error(err.message);\n }\n}\nexport default readRepo;\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/util/files.js\n\n*isi konten*\n\nimport fg from \"fast-glob\";\nimport fs from \"fs/promises\";\nimport path from \"path\";\nimport eee from \"../config/ignore.js\";\nasync function bacaFile(p) {\n try {\n const cek = path.extname(p);\n const data = await fs.readFile(p, \"utf-8\");\n return cek === \".json\" ? JSON.parse(data) : data;\n } catch (err) {\n throw new Error(`gagal  membaca file ${p}`);\n }\n}\nasync function tulisFile(p, data) {\n try {\n await fs.writeFile(p, data);\n } catch (err) {\n throw new Error(`gagal menulis ke file ${p}`);\n }\n}\nasync function buatFolder(p) {\n try {\n await fs.mkdir(p, { recursive: true });\n } catch (err) {\n throw new Error(`gagal membuat folder ${p}`);\n }\n}\nasync function hapusFile(p) {\n try {\n await fs.unlink(p);\n } catch (err) {\n throw new Error(`gagal menghapus file ${p}`);\n }\n}\nasync function hapusFolder(p) {\n try {\n await fs.rm(p, { recursive: true });\n } catch (err) {\n throw new Error(`gagal menghapus folder ${p}`);\n }\n}\nasync function bacaFolder(p, { foldernya, filenya, extensinya }, mode) {\n try {\n const folder = [\n ...eee.folder.filter((e) => e).map((e) => `!${e}/**`),\n ...foldernya,\n ];\n const extensi = [\n ...eee.extensi.filter((e) => e).map((e) => `!**/*.${e.replace(\".\", \"\")}`),\n ...extensinya,\n ];\n let config = [];\n if (mode === \"1\") {\n config = [\n ...foldernya.map((e) => e.replace(\"!\", \"\")),\n ...filenya.map((e) => e.replace(\"!\", \"\")),\n ...extensinya.map((e) => e.replace(\"!\", \"\")),\n ];\n } else {\n config = [\"**/*.*\", ...folder, ...filenya, ...extensi];\n }\n\n return await fg(config, { cwd: p, absolute: true, sort: true });\n } catch (err) {\n throw new Error(`gagal membaca folder ${p}`);\n }\n}\nasync function cekAda(p) {\n try {\n await fs.access(p);\n } catch (err) {\n throw new Error(`gagal mengecek ${p}`);\n }\n}\nasync function data() {\n try {\n const dataHistory = await bacaFile(\"history/riwayat.json\");\n const targetData = await bacaFile(\"history/target.json\");\n const dataIntruksi = await bacaFile(\"src/dok/intruksi.txt\");\n const dataPrompt = await bacaFile(\"prompt.txt\");\n return {\n dataHistory,\n dataTarget: targetData.target || \"\",\n dataIntruksi,\n dataPrompt,\n };\n } catch (err) {\n throw new Error(err.message);\n }\n}\nexport {\n bacaFile,\n tulisFile,\n buatFolder,\n hapusFile,\n hapusFolder,\n bacaFolder,\n cekAda,\n data,\n};\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/util/input.js\n\n*isi konten*\n\nimport promptSync from \"prompt-sync\";\nconst prompt = promptSync();\nclass Masukan {\n static wajib(message) {\n let key;\n while (true) {\n const v = prompt(message);\n if (!v.trim()) {\n console.log(\"silakan masukkan terlebih dahulu!\");\n continue;\n } else if (v.trim().toLowerCase() === \"exit\") {\n console.clear();\n console.log(\"program berhenti...\");\n process.exit(1);\n } else {\n key = v;\n break;\n }\n }\n console.clear();\n return key.trim();\n }\n static pilih(message, opsi) {\n let key;\n while (true) {\n const v = prompt(message);\n if (v && opsi.includes(v.trim())) {\n key = v;\n break;\n } else if (v.trim().toLowerCase() === \"exit\") {\n console.clear();\n console.log(\"program berhenti...\");\n process.exit(1);\n } else {\n console.log(`Pilih antara ${opsi.join(\"/\")} silahkan!`);\n }\n }\n console.clear();\n return key.trim().toLowerCase();\n }\n static biasa(message) {\n const key = prompt(message);\n if (key.trim().toLowerCase() === \"exit\") {\n console.clear();\n console.log(\"program berhenti...\");\n process.exit(1);\n }\n console.clear();\n return key.trim();\n }\n}\nexport default Masukan;\n\n\n---\n\n---\n\n*lokasi*\n\ngenerator-kode/src/util/tampilan.js\n\n*isi konten*\n\nclass Print {\n static clear(...message) {\n console.clear();\n let msg;\n if (message.length > 0) {\n msg = message.join(\" \");\n } else {\n msg = message[0];\n }\n console.log(msg);\n }\n static log(...message) {\n let msg;\n if (message.length > 0) {\n msg = message.join(\" \");\n } else {\n msg = message[0];\n }\n console.log(msg);\n }\n}\nexport default Print;\n\n\n---\n\n**tugasnya anda itu:**\n\nperbaiki pada bagian lisensinya di dokumentasi supaya lisensinya open source"
}
]
},
{
"role": "model",
"parts": [
{
"text": "{\n \"repo\": [\n {\n \"jenis\": \"dok\",\n \"lokasi\": \"readme.md\",\n \"konten\": \"# Generator-Kode: Generator & Refactor Kode Cerdas Berbasis AI\\n\\nGenerator-Kode adalah sebuah alat baris perintah (CLI) untuk membantu developer mempercepat alur kerja mereka, baik dalam membuat struktur proyek baru dari awal maupun melakukan refactoring pada proyek yang sudah ada berdasarkan instruksi, dengan bertenaga mesin model Gemini.\\n\\n## Fitur Utama\\n\\n- **Pembuatan Proyek Baru**: Hasilkan seluruh struktur folder dan file untuk proyek baru (misalnya, \\\"buatkan saya API server Express dengan TypeScript\\\") hanya dengan satu perintah.\\n- **Refactoring & Perbaikan Proyek**: Analisis kode proyek yang ada dan terapkan perubahan, tambahkan fitur baru, atau perbaiki bug sesuai instruksi Anda.\\n- **Pembacaan Proyek Selektif**: Kontrol penuh atas file mana yang dianalisis oleh AI, dengan mode inklusi (hanya baca yang dipilih) atau eksklusi (abaikan yang dipilih).\\n- **Riwayat Percakapan Berkonteks**: Menyimpan dan menggunakan kembali riwayat interaksi dengan AI, memungkinkan Anda untuk melakukan koreksi berulang hingga hasil yang diinginkan tercapai.\\n- **Konfigurasi Fleksibel**: Mudah untuk mengkonfigurasi model AI, temperature, dan parameter lainnya melalui file `.env`.\\n- **Dukungan Prompt Eksternal**: Gunakan file `prompt.txt` untuk instruksi yang lebih panjang dan kompleks, ideal untuk tugas yang rumit.\\n\\n## Prasyarat\\n\\n- [Node.js](https://nodejs.org/) (versi 18.x atau lebih tinggi)\\n- API Key dari [Google AI Studio](https://aistudio.google.com/app/apikey)\\n\\n## Instalasi & Konfigurasi\\n\\nIkuti langkah-langkah berikut untuk menjalankan Gen-Kode di mesin lokal Anda.\\n\\n**1. Clone Repositori**\\n\\n`bash\\ngit clone https://github.com/waone377/generator-kode.git\\ncd generator-kode\\n`\\n\\n**2. Instal Dependensi**\\n\\n`bash\\nnpm install\\n`\\n\\n**3. Konfigurasi Environment Variable**\\n\\nBuat file baru bernama `.env` di root direktori proyek. Salin konten di bawah ini dan isi nilainya sesuai dengan konfigurasi Anda.\\n\\n`env\\nGEMINI_API=?\\nMODEL=gemini-2.5-pro\\nTEMPERATURE=0.9\\nPEMIKIRAN=23000\\nMAX_OUTPUT=15000\\n`\\n\\n- `GEMINI_API`: Kunci API Anda dari Google AI Studio. **Wajib diisi.**\\n- `MODEL`: Model Gemini yang ingin Anda gunakan. `gemini-2.5-flash` atau `gemini-2.5-pro` adalah pilihan yang solid dan direkomendasikan.\\n- `TEMPERATURE`: Mengontrol kreativitas output (0.0 - 2.0). Nilai yang lebih tinggi (misalnya, 0.9) menghasilkan output yang lebih beragam, sementara nilai yang lebih rendah (misalnya, 0.2) lebih fokus dan deterministik.\\n- `PEMIKIRAN`: Alokasi token untuk proses \\\"berpikir\\\" internal model sebelum menghasilkan respons.\\n- `MAX_OUTPUT`: Jumlah maksimum token yang dapat dihasilkan oleh model dalam satu respons.\\n\\n## Cara Penggunaan\\n\\nJalankan aplikasi dari terminal:\\n\\n`bash\\nnpm start\\n`\\n\\nAnda akan disambut dengan menu utama untuk memilih mode operasi.\\n\\n### Mode 1: Membuat Project Baru\\n\\nIdeal untuk memulai proyek dari nol berdasarkan deskripsi konseptual.\\n\\n1. Pilih menu `1`.\\n2. Tentukan apakah akan menggunakan `prompt.txt` untuk deskripsi yang detail atau mengetik langsung di terminal.\\n3. Setelah AI memproses permintaan, masukkan nama untuk folder proyek baru.\\n4. Proyek akan dibuat di dalam direktori `output/<nama-proyek>`.\\n\\n### Mode 2: Memperbaiki Project\\n\\nDigunakan untuk memodifikasi, menambah fitur, atau memperbaiki kode pada proyek yang sudah ada.\\n\\n1. Pilih menu `2`.\\n2. Masukkan path ke direktori proyek yang akan diperbaiki. Aplikasi akan mengingat path terakhir yang Anda gunakan.\\n3. **Pilih Mode Pembacaan Source**:\\n - **Inklusi (Sertakan)**: Mode ini hanya akan menganalisis file/folder yang Anda tentukan secara spesifik. Berguna untuk perbaikan yang sangat terfokus.\\n - **Eksklusi (Kecualikan)**: Mode ini akan membaca seluruh proyek dan mengabaikan file/folder yang Anda tentukan. Direkomendasikan untuk pemahaman konteks yang lebih luas.\\n4. Berikan instruksi perbaikan, baik melalui `prompt.txt` atau input langsung.\\n5. Setelah AI memberikan solusi, pilih mode penyimpanan:\\n - **Timpa project asli**: Menerapkan perubahan langsung ke proyek sumber.\\n - **Membuat project baru**: Menyimpan versi yang telah diperbaiki sebagai proyek baru di dalam direktori `output/`.\\n\\n### Mode 3: Hapus Riwayat\\n\\nOpsi ini akan menghapus semua riwayat percakapan yang tersimpan di `history/riwayat.json` untuk memulai sesi baru yang bersih.\\n\\n## Struktur Proyek\\n\\n- `src/_app.js`: Titik masuk utama aplikasi, mengelola alur menu utama.\\n- `src/config/`: Direktori untuk file konfigurasi statis.\\n - `ignore.js`: Daftar default file, folder, dan ekstensi yang diabaikan saat membaca proyek.\\n- `src/dok/`: Berisi file teks yang digunakan sebagai instruksi sistem untuk AI.\\n - `intruksi.txt`: Instruksi inti peran dan format output AI.\\n- `src/fitur/`: Modul yang mengelola fitur utama aplikasi.\\n - `pembuatan.js`: Mengelola logika untuk mode \\\"Membuat Project Baru\\\".\\n - `perbaikan.js`: Mengelola logika untuk mode \\\"Memperbaiki Project\\\".\\n - `penghapusan.js`: Mengelola logika untuk mode \\\"Hapus Riwayat\\\".\\n- `src/mesin/`: Modul inti untuk interaksi dengan AI Gemini.\\n - `configurasi.js`: Menginisialisasi model Google Gemini dengan konfigurasi dari `.env`.\\n - `gemini.js`: Mengirim permintaan ke model AI, mengelola riwayat sesi, dan menangani koreksi.\\n - `schema.js`: Mendefinisikan skema JSON yang diharapkan dari respons AI.\\n- `src/service/`: Modul untuk logika bisnis spesifik.\\n - `generate_repo.js`: Menerapkan output JSON dari AI ke sistem file (membuat/menghapus file/folder).\\n - `read_repo.js`: Membaca struktur dan konten proyek target menjadi format markdown.\\n- `src/util/`: Modul utilitas pembantu.\\n - `files.js`: Menangani operasi file system seperti membaca, menulis, dan menghapus.\\n - `input.js`: Mengelola interaksi dengan pengguna di terminal.\\n - `tampilan.js`: Mengelola output ke terminal.\\n- `history/`: (Dibuat saat runtime) Direktori untuk menyimpan data sesi.\\n - `riwayat.json`: Menyimpan riwayat percakapan dengan AI.\\n - `target.json`: Menyimpan path direktori terakhir yang digunakan dalam mode perbaikan.\\n - `output.json`: Menyimpan output JSON mentah terakhir dari AI.\\n- `output/`: Direktori default tempat proyek baru atau yang diperbaiki disimpan.\\n- `package.json`: Mendefinisikan metadata proyek, dependensi, dan skrip.\\n- `prompt.txt`: Tempat untuk menulis instruksi/prompt yang panjang atau kompleks untuk AI.\\n- `.gitignore`: Mengabaikan file dan folder yang tidak perlu dilacak oleh Git.\\n- `readme.md`: Dokumentasi proyek ini.\\n\\n## Lisensi\\n\\nProyek ini dilisensikan di bawah Lisensi MIT. Ini berarti Anda bebas menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan/atau menjual salinan perangkat lunak, selama Anda menyertakan pemberitahuan hak cipta dan izin asli dalam semua salinan atau bagian penting dari perangkat lunak.\\n\"\n }\n ],\n \"text\": \"Perubahan telah dilakukan pada file dokumentasi `readme.md`. Bagian 'Lisensi' telah diperbarui dari Lisensi ISC menjadi Lisensi MIT, yang merupakan lisensi open-source yang permisif dan umum digunakan. Penjelasan singkat mengenai kebebasan yang diberikan oleh lisensi MIT juga ditambahkan untuk memperjelas status open-source dari proyek ini.\",\n \"delets\": []\n}"
}
]
}
]

```

---

---

*lokasi*

generator-kode/history/target.json

*isi konten*

```

{
"target": "/storage/emulated/0/Music/\_tools/generator-kode"
}

```

---

---

*lokasi*

generator-kode/src/_app.js

*isi konten*

```

import Print from "./util/tampilan.js";
import Masukan from "./util/input.js";
import pembuatan from "./fitur/pembuatan.js";
import perbaikan from "./fitur/perbaikan.js";
import penghapusan from "./fitur/penghapusan.js";
import setup from "./config/setup.js";

async function main() {
try {
await setup();
while (true) {
Print.clear(
"SELAMAT DATANG!\nsilahkan pilih:\n1. buat projek\n2. perbaiki projek\n3. hapus riwayat\n",
);
Print.log("ketik 'exit' untuk stop..");
const pilih = Masukan.pilih("silakan pilih (1/2/3)?> ", ["1", "2", "3"]);
switch (pilih) {
case "1":
await pembuatan();
break;
case "2":
await perbaikan();
break;
case "3":
await penghapusan();
break;
}
const next = Masukan.pilih("lanjutkan program (y/n)?> ", ["y", "n"]);
if (next === "y") continue;
Print.log("program telah berhenti...");
break;
}
} catch (err) {
Print.clear("Oops error..\n terjadi error; \n", err.message);
}
}
main();

```

---

---

*lokasi*

generator-kode/src/config/ignore.js

*isi konten*

```

const eee = {
folder: [
"node_modules",
".git",
".vscode",
".idea",
"__pycache__",
"vendor",
"dist",
"build",
],
file: [".env"],
extensi: [
".csv",
".jpg",
".jpeg",
".png",
".gif",
".bmp",
".svg",
".webp",
".ico",
".mp3",
".wav",
".ogg",
".flac",
".aac",
".mp4",
".mov",
".avi",
".mkv",
".webm",
".zip",
".rar",
".7z",
".tar",
".gz",
".woff",
".woff2",
".ttf",
".otf",
".eot",
".lock",
".log",
".pdf",
".doc",
".docx",
".xls",
".xlsx",
".ppt",
".pptx",
".exe",
".dll",
".so",
".class",
".pyc",
".jar",
".bin",
".img",
".iso",
],
};
export default eee;

```

---

---

*lokasi*

generator-kode/src/config/setup.js

*isi konten*

```

import path from "path";
import { cekAda, tulisFile, buatFolder } from "../util/files.js";
const folder = "history";
const dataSetup = {
"target.json": "{}",
"riwayat.json": "[]",
"output.json": "{}",
};
async function setup() {
try {
try {
await cekAda(folder);
} catch {
await buatFolder(folder);
}
for (const [name, value] of Object.entries(dataSetup)) {
const p = path.join(folder, name);
try {
await cekAda(p);
} catch {
await tulisFile(p, value);
}
}
} catch (err) {
throw new Error(err.message);
}
}
export default setup;

```

---

---

*lokasi*

generator-kode/src/fitur/pembuatan.js

*isi konten*

```

import genAi from "../mesin/gemini.js";
import Print from "../util/tampilan.js";
import generateRepo from "../service/generate_repo.js";
import Prompt from "../service/opsi_prompt.js";

async function pembuatan() {
try {
const prompt = await Prompt.pembuatan();
const res = await genAi(prompt);
await generateRepo(res, "pembuatan");
} catch (err) {
throw new Error(err.message);
}
}

export default pembuatan;

```

---

---

*lokasi*

generator-kode/src/fitur/penghapusan.js

*isi konten*

```

import { data, tulisFile } from "../util/files.js";
import Masukan from "../util/input.js";
import Print from "../util/tampilan.js";

async function penghapusan() {
try {
const { dataHistory } = await data();
if (dataHistory.length > 0) {
Print.clear("total riwayat -", dataHistory.length / 2);
const konfirmasi = Masukan.pilih("hapus riwayat sebelumnya (y/n)?> ", [
"y",
"n",
]);
if (konfirmasi === "y") {
await tulisFile("history/riwayat.json", "[]");
Print.clear("sukses semua riwayat telah dihapus!");
}
} else {
Print.clear("daftar riwayat masih kosong!");
}
} catch (err) {
throw new Error(err.message);
}
}

export default penghapusan;

```

---

---

*lokasi*

generator-kode/src/fitur/perbaikan.js

*isi konten*

```

import genAi from "../mesin/gemini.js";
import os from "os";
import path from "path";
import { data, tulisFile } from "../util/files.js";
import Masukan from "../util/input.js";
import Print from "../util/tampilan.js";
import readRepo from "../service/read_repo.js";
import generateRepo from "../service/generate_repo.js";
import Prompt from "../service/opsi_prompt.js";
async function perbaikan() {
try {
let target = "";
const { dataTarget } = await data();

    if (dataTarget) {
      Print.clear("target history:\n", dataTarget);
      const pake = Masukan.pilih(
        "gunakan lokasi repository terakhir tersebut (y/n)?> ",
        ["y", "n"],
      );
      target =
        pake === "y"
          ? dataTarget
          : Masukan.wajib("masukkan lokasi repository target?> ");
    } else {
      target = Masukan.wajib("masukkan lokasi repository target?> ");
    }

    let p = target;
    if (target.startsWith("~/")) {
      p = path.join(os.homedir(), target.substr(2));
    }
    await tulisFile(
      "history/target.json",
      JSON.stringify({ target: path.resolve(p) }, null, 4),
    );
    const markdown = await readRepo(p);
    const prompt = await Prompt.perbaikan();
    const pesan = `cermatilah repositori project saya ini dengan teliti:${markdown}\n\n**tugasnya anda itu:**\n\n${prompt}`;
    const res = await genAi(pesan);
    await generateRepo(res, "perbaikan");

} catch (err) {
throw new Error(err.message);
}
}
export default perbaikan;

```

---

---

*lokasi*

generator-kode/src/mesin/configurasi.js

*isi konten*

```

import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import schema from "./schema.js";
import { data } from "../util/files.js";

async function configGenAi(isHistory = false) {
try {
const AI = new GoogleGenAI({ apiKey: process.env.GEMINI_API });
let history = [];
const { dataHistory, dataIntruksi } = await data();
if (isHistory) {
history = dataHistory;
}
const chat = AI.chats.create({
model: process.env.MODEL,
config: {
temperature: process.env.TEMPERATURE,
systemInstruction: dataIntruksi,
thinkingConfig: {
includeThoughts: true,
thinkingBudget: process.env.PEMIKIRAN,
},
tools: [],
responseMimeType: "application/json",
responseSchema: schema,
generationConfig: {
maxOutputTokens: process.env.MAX_OUTPUT,
presencePenalty: 8,
frequencyPenalty: 16,
enableEnhancedCivicAnswers: false,
},
},
history: history,
});
return {
model: chat,
AI: AI,
};
} catch (err) {
throw new Error(err.message);
}
}

export default configGenAi;

```

---

---

*lokasi*

generator-kode/src/mesin/gemini.js

*isi konten*

```

import configGenAi from "./configurasi.js";
import { tulisFile, data } from "../util/files.js";
import Masukan from "../util/input.js";
import Print from "../util/tampilan.js";

async function genAi(prompt) {
let pakeHistory = "y";
let isHistory = false;
let pakePanduan = "n";
let msg = [{ text: "" }];
let history = [];
let tambahan = true;
let result = null;

try {
const { AI, model } = await configGenAi(isHistory);

    const { dataHistory } = await data();
    while (true) {
      if (tambahan) {
        msg[0].text = prompt;
        if (dataHistory.length > 0) {
          Print.clear("item history -", dataHistory.length / 2);
          pakeHistory = Masukan.pilih("gunakan history sebelumnya (y/n)?> ", [
            "y",
            "n",
          ]);
          if (pakeHistory === "y") isHistory = true;
        }
        pakePanduan = Masukan.pilih("gunakan file panduan (y/n)?> ", [
          "y",
          "n",
        ]);
        if (pakePanduan === "y") {
          Print.clear("mencerna panduan...");
          const eee = await AI.files.upload({
            file: "src/dok/dokumentasi.txt",
            displayName: "sumber panduan",
          });
          msg.push({
            fileData: {
              mimeType: eee.mimeType,
              fileUri: eee.uri,
            },
          });
        }
      }

      Print.clear("memproses permintaan silakan tunggu...");
      const respons = await model.sendMessage({ message: msg });
      result = JSON.parse(respons.text);
      const resData = JSON.stringify(result, null, 2);
      Print.clear("Laporan:\n***\n", result.text, "\n***");
      history.push({
        role: "user",
        parts: msg,
      });
      history.push({
        role: "model",
        parts: [{ text: resData }],
      });
      const isKoreksi = Masukan.pilih("koreksi kembali hasil (y/n)?> ", [
        "y",
        "n",
      ]);
      if (isKoreksi === "n") {
        break;
      } else {
        const q = Masukan.wajib("apa yang ingin di betulkan?> ");
        msg[0].text = `outputnya masih kurang ${q} silakan revisi kembali`;
        isHistory = true;
        tambahan = false;
      }
    }

    const out = [...dataHistory, ...history];
    await tulisFile("history/riwayat.json", JSON.stringify(out, null, 4));
    return result || null;

} catch (err) {
throw new Error(err.message);
}
}

export default genAi;

```

---

---

*lokasi*

generator-kode/src/mesin/schema.js

*isi konten*

```

import { Type } from "@google/genai";

const repoItemSchema = {
type: Type.OBJECT,
properties: {
jenis: {
type: Type.STRING,
enum: ["folder", "file", "dok", "config"],
description:
"Jenis komponen. 'folder' untuk direktori, 'file' untuk kode sumber, 'config' untuk file konfigurasi, 'dok' untuk dokumentasi.",
},
lokasi: {
type: Type.STRING,
description:
"Path relatif dari root proyek, contoh: 'src/components/Button.js'. Gunakan garis miring '/' sebagai pemisah.",
pattern: "^[a-zA-Z0-9._\\-/]+$",
},
konten: {
type: Type.STRING,
description:
"Isi konten lengkap untuk file. Untuk 'jenis: folder', nilai ini harus string kosong ''.",
},
},
required: ["jenis", "lokasi", "konten"],
};

const deleteItemSchema = {
type: Type.OBJECT,
properties: {
jenis: {
type: Type.STRING,
enum: ["file", "folder"],
description: "Tipe entitas yang akan dihapus: 'file' atau 'folder'.",
},
lokasi: {
type: Type.STRING,
description:
"Path relatif dari root proyek untuk file/folder yang akan dihapus.",
pattern: "^[a-zA-Z0-9._\\-/]+$",
},
},
required: ["jenis", "lokasi"],
};

const mainSchema = {
type: Type.OBJECT,
properties: {
repo: {
type: Type.ARRAY,
description:
"Daftar semua file dan folder yang dibuat atau dimodifikasi. Jangan sertakan file yang tidak berubah.",
items: repoItemSchema,
},
delets: {
type: Type.ARRAY,
description:
"Daftar file atau folder yang perlu dihapus dari proyek. Jika tidak ada, gunakan array kosong [].",
items: deleteItemSchema,
},
text: {
type: Type.STRING,
description:
"Ringkasan teknis yang jelas dan profesional tentang perubahan yang dibuat, arsitektur yang diterapkan, dan keputusan teknis penting. seperti mana saja yang dirubah atau diperbaiki dan di mana saja yang dibuat).",
},
},
required: ["repo", "text"],
};

export default mainSchema;

```

---

---

*lokasi*

generator-kode/src/service/generate_repo.js

*isi konten*

```

import path from "path";
import {
cekAda,
buatFolder,
hapusFolder,
hapusFile,
tulisFile,
data,
} from "../util/files.js";
import Print from "../util/tampilan.js";
import Masukan from "../util/input.js";
async function generateRepo(source, mode) {
try {
const { dataTarget } = await data();
const letak = dataTarget;
const lokasi = path.join(path.resolve("."), "output");
let base = lokasi;
if (mode === "pembuatan") {
const nameRepo = Masukan.wajib("masukkan nama repository?> ");
base = path.join(lokasi, nameRepo);
await buatFolder(base);
}
if (mode === "perbaikan") {
const opsi = Masukan.pilih(
"pilih penyimpanan:\n1. timpa repository\n2. buat repository\nsilahkan pilih (1/2)?> ",
["1", "2"],
);
if (opsi === "2") {
const nameRepo = Masukan.wajib("masukkan nama repository?> ");
base = path.join(lokasi, nameRepo);
await buatFolder(base);
}
base = letak;
}
const dir = base.split("/").pop();
Print.clear(mode, "\nvolder:", dir, "\npath:", base, "\n===");
if (source.delets.length > 0 && mode === "perbaikan") {
for (const e of source.delets) {
const p = path.join(path.resolve(base), e.lokasi);
switch (e.jenis) {
case "folder":
await hapusFolder(p);
Print.log("menghapus folder", e.lokasi);
break;
case "file":
await hapusFile(p);
Print.log("menghapus file", e.lokasi);
break;
default:
Print.log("ada satu source yang tidak valid untuk dihapus!");
break;
}
}
}
// di luar kondisi delets
if (source.repo) {
for (const e of source.repo) {
const p = path.join(path.resolve(base), e.lokasi);
switch (e.jenis) {
case "folder":
await buatFolder(p);
Print.log("membuat folder", e.lokasi);
break;
case "file":
await tulisFile(p, e.konten);
Print.log("membuat file", e.lokasi);
break;
case "config":
await tulisFile(p, e.konten);
Print.log("membuat file", e.lokasi);
break;
case "dok":
await tulisFile(p, e.konten);
Print.log("membuat file", e.lokasi);
break;
default:
Print.log(
"ada satu source yang tidak valid untuk dibuat!",
e.lokasi,
);
break;
}
}
}
Print.log("sukses", mode, "telah dilakukan..");
await tulisFile("history/output.json", JSON.stringify(source, null, 4));
} catch (err) {
throw new Error(err.message);
}
}
export default generateRepo;

```

---

---

*lokasi*

generator-kode/src/service/opsi_prompt.js

*isi konten*

```

import Print from "../util/tampilan.js";
import Masukan from "../util/input.js";
import { data } from "../util/files.js";
class Prompt {
static async pembuatan() {
const { dataPrompt } = await data();
const pakePrompt = Masukan.pilih("gunakan prompt.txt (y/n)?> ", ["y", "n"]);
let prompt = "";
if (pakePrompt === "y") {
prompt = dataPrompt;
Print.clear("isi prompt:\n**_", prompt || "kosong", "\n_**");
const next = Masukan.pilih("lanjutkan (y/n)?> ", ["y", "n"]);
if (next === "n") {
prompt = Masukan.wajib("project seperti apa yang ingin dibuat?> ");
}
} else {
prompt = Masukan.wajib("project seperti apa yang ingin dibuat?> ");
}
return prompt;
}
static async perbaikan() {
const { dataPrompt } = await data();
const pakePrompt = Masukan.pilih("gunakan prompt.txt (y/n)?> ", ["y", "n"]);
let prompt = "";
if (pakePrompt === "y") {
prompt = dataPrompt;
Print.clear("isi prompt:\n**_", prompt || "kosong", "\n_**");
const next = Masukan.pilih("lanjutkan (y/n)?> ", ["y", "n"]);
if (next === "n") {
prompt = Masukan.wajib("apa yang ingin diperbaiki?> ");
}
} else {
prompt = Masukan.wajib("apa yang ingin diperbaiki?> ");
}
return prompt;
}
}
export default Prompt;

```

---

---

*lokasi*

generator-kode/src/service/read_repo.js

*isi konten*

```

import path from "path";
import { bacaFolder, bacaFile, tulisFile, cekAda } from "../util/files.js";
import Print from "../util/tampilan.js";
import Masukan from "../util/input.js";
async function readRepo(target) {
try {
const data = {
folder: [],
file: [],
extensi: [],
};
const mode = Masukan.pilih(
"pilih pembacaan file & folder:\n1. pilih beberapa\n2. kecualikan beberapa\nsilahkan pilih (1/2)?> ",
["1", "2"],
);
const text = mode === "1" ? "dipilih" : "dikecualikan";
Masukan.pilih(
"jika folder/file/extensi/ lebih dari satu pisahkan dengan (,)\ncontoh:\nfolder: dist, node_modules\nfile: example.js, config.json\nextensi: .txt, .py\n mengerti lanjut (y/n): ",
["y", "n"],
);
const foldernya = Masukan.biasa(
`masukkan nama volder yang ingin ${text}?: `,
);
data.folder.push(foldernya.replaceAll(" ", "").split(","));
const filenya = Masukan.biasa(
`masukkan nama file yang ingin ${text} beserta extensinya?: `,
);
data.file.push(filenya.replaceAll(" ", "").split(","));
const extensinya = Masukan.biasa(
`masukkan format extensi yang ingin ${text}?: `,
);
data.extensi.push(extensinya.replaceAll(" ", "").split(","));
const daftar = {
foldernya: data.folder
.flat()
.filter((e) => e)
.map((e) => `!${e}/**`),
filenya: data.file
.flat()
.filter((e) => e)
.map((e) => `!**/${e}`),
extensinya: data.extensi
.flat()
.filter((e) => e)
.map((e) => `!**/*.${e.replace(".", "")}`),
};
const repo = await bacaFolder(target, daftar, mode);
const dir = target.split("/").pop();
Print.clear("membaca...\nvolder:", dir, "\npath:", target, "\n===");
let markdown = "";
for (const e of repo) {
const letak = e.substring(e.indexOf(dir), e.length);
Print.log("sedang membaca", letak);
const kode = await bacaFile(e, true);
markdown += `\n\n---\n\n*lokasi*\n\n${letak}\n\n*isi konten*\n\n\`\`\`\n${kode}\n\`\`\`\n\n---`;
}
await tulisFile("history/repo.md", markdown);
Print.log("selesai terbaca");
return markdown;
} catch (err) {
throw new Error(err.message);
}
}
export default readRepo;

```

---

---

*lokasi*

generator-kode/src/util/files.js

*isi konten*

```

import fg from "fast-glob";
import fs from "fs/promises";
import path from "path";
import eee from "../config/ignore.js";
async function bacaFile(p, isJson = false) {
try {
const cek = path.extname(p);
const data = await fs.readFile(p, "utf-8");
return cek === ".json" && !isJson ? JSON.parse(data) : data;
} catch (err) {
throw new Error(`gagal  membaca file ${p}`);
}
}
async function tulisFile(p, data) {
try {
await fs.writeFile(p, data);
} catch (err) {
throw new Error(`gagal menulis ke file ${p}`);
}
}
async function buatFolder(p) {
try {
await fs.mkdir(p, { recursive: true });
} catch (err) {
throw new Error(`gagal membuat folder ${p}`);
}
}
async function hapusFile(p) {
try {
await fs.unlink(p);
} catch (err) {
throw new Error(`gagal menghapus file ${p}`);
}
}
async function hapusFolder(p) {
try {
await fs.rm(p, { recursive: true });
} catch (err) {
throw new Error(`gagal menghapus folder ${p}`);
}
}
async function bacaFolder(p, { foldernya, filenya, extensinya }, mode) {
try {
const folder = [
...eee.folder.filter((e) => e).map((e) => `!${e}/**`),
...foldernya,
];
const extensi = [
...eee.extensi.filter((e) => e).map((e) => `!**/*.${e.replace(".", "")}`),
...extensinya,
];
let config = [];
if (mode === "1") {
config = [
...foldernya.map((e) => e.replace("!", "")),
...filenya.map((e) => e.replace("!", "")),
...extensinya.map((e) => e.replace("!", "")),
];
} else {
config = ["**/*.*", ...folder, ...filenya, ...extensi];
}

    return await fg(config, { cwd: p, absolute: true, sort: true });

} catch (err) {
throw new Error(`gagal membaca folder ${p}`);
}
}
async function cekAda(p) {
try {
await fs.access(p);
} catch (err) {
throw new Error(`gagal mengecek ${p}`);
}
}
async function data() {
try {
const dataHistory = await bacaFile("history/riwayat.json");
const targetData = await bacaFile("history/target.json");
const dataIntruksi = await bacaFile("src/dok/intruksi.txt");
const dataPrompt = await bacaFile("prompt.txt");
return {
dataHistory,
dataTarget: targetData.target || "",
dataIntruksi,
dataPrompt,
};
} catch (err) {
throw new Error(err.message);
}
}
export {
bacaFile,
tulisFile,
buatFolder,
hapusFile,
hapusFolder,
bacaFolder,
cekAda,
data,
};

```

---

---

*lokasi*

generator-kode/src/util/input.js

*isi konten*

```

import promptSync from "prompt-sync";
const prompt = promptSync();
class Masukan {
static wajib(message) {
let key;
while (true) {
const v = prompt(message);
if (!v.trim()) {
console.log("silakan masukkan terlebih dahulu!");
continue;
} else if (v.trim().toLowerCase() === "exit") {
console.clear();
console.log("program berhenti...");
process.exit(1);
} else {
key = v;
break;
}
}
console.clear();
return key.trim();
}
static pilih(message, opsi) {
let key;
while (true) {
const v = prompt(message);
if (v && opsi.includes(v.trim())) {
key = v;
break;
} else if (v.trim().toLowerCase() === "exit") {
console.clear();
console.log("program berhenti...");
process.exit(1);
} else {
console.log(`Pilih antara ${opsi.join("/")} silahkan!`);
}
}
console.clear();
return key.trim().toLowerCase();
}
static biasa(message) {
const key = prompt(message);
if (key.trim().toLowerCase() === "exit") {
console.clear();
console.log("program berhenti...");
process.exit(1);
}
console.clear();
return key.trim();
}
}
export default Masukan;

```

---

---

*lokasi*

generator-kode/src/util/tampilan.js

*isi konten*

```

class Print {
static clear(...message) {
console.clear();
let msg;
if (message.length > 0) {
msg = message.join(" ");
} else {
msg = message[0];
}
console.log(msg);
}
static log(...message) {
let msg;
if (message.length > 0) {
msg = message.join(" ");
} else {
msg = message[0];
}
console.log(msg);
}
}
export default Print;

```

---
```
