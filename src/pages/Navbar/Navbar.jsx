import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { User } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import CreateProjectForm from '../Project/CreateProjectForm'
import { useNavigate } from 'react-router-dom'

const TeamIcon = () => (
  <svg
    viewBox="0 0 736 736"
    className="h-8 w-8 mr-2 dark:fill-black fill-white" // Added dark mode support
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(0.000000,736.000000) scale(0.100000,-0.100000)">
      <path
        d="M2381 5969 c-169 -30 -352 -156 -440 -303 -160 -268 -113 -602 116
      -816 53 -50 64 -65 61 -88 -3 -26 -6 -27 -71 -34 -124 -12 -254 -95 -327 -208
      -118 -185 -84 -435 79 -583 l48 -42 -60 -35 c-106 -62 -185 -173 -207 -291
      -14 -71 -13 -765 0 -790 12 -22 62 -26 78 -6 7 8 12 145 14 402 l3 390 28 57
      c58 118 151 180 279 186 104 5 164 -16 239 -85 78 -72 101 -129 107 -256 5
      -115 -1 -128 -50 -100 -43 24 -68 75 -68 139 0 63 -16 87 -55 82 -42 -4 -57
      -39 -49 -108 23 -201 183 -282 525 -265 l136 6 31 -26 c17 -14 33 -39 37 -55
      8 -35 -15 -89 -46 -108 -30 -19 -262 -35 -384 -27 -117 8 -232 35 -290 69 -56
      34 -122 107 -150 169 -24 53 -55 158 -55 188 0 20 -31 49 -53 49 -8 0 -23 -8
      -33 -17 -23 -23 -13 -107 25 -211 59 -162 161 -261 324 -316 15 -5 17 -20 16
      -128 0 -85 5 -139 15 -173 44 -141 176 -286 362 -398 73 -44 246 -119 329
      -142 98 -28 94 -24 79 -102 -16 -81 -18 -356 -4 -384 12 -22 62 -26 78 -6 5 6
      12 95 15 197 4 150 9 197 26 250 57 180 210 339 384 400 85 30 238 38 330 16
      216 -51 392 -220 453 -436 10 -34 18 -116 21 -215 4 -130 8 -162 21 -173 22
      -17 39 -15 62 8 18 18 20 33 20 137 0 110 -9 203 -25 263 -6 25 -2 27 96 59
      128 42 314 135 400 200 199 151 278 301 279 527 l0 90 66 24 c167 59 275 198
      320 414 13 61 13 71 -1 92 -8 13 -23 24 -33 24 -37 0 -53 -25 -68 -100 -28
      -148 -97 -252 -204 -309 -96 -51 -177 -64 -395 -64 -209 1 -263 10 -294 50
      -26 32 -27 90 -3 119 33 42 56 46 190 39 217 -12 364 20 442 96 51 49 69 91
      77 173 7 77 -6 106 -46 106 -39 0 -47 -14 -54 -89 -6 -71 -24 -102 -78 -139
      l-34 -24 -5 54 c-17 176 37 305 158 375 163 96 371 35 460 -132 l27 -50 5
      -396 c5 -424 6 -429 56 -429 52 0 54 15 54 400 0 195 -4 381 -10 413 -20 124
      -107 248 -209 298 -28 13 -50 26 -50 29 0 3 16 17 36 33 158 119 208 371 112
      559 -52 103 -202 218 -304 235 -32 5 -35 9 -35 38 0 26 8 40 45 69 139 114
      225 304 225 495 0 183 -57 318 -190 452 -69 70 -101 94 -170 128 -258 126
      -551 79 -751 -121 -254 -254 -251 -671 7 -923 120 -117 253 -175 423 -183 92
      -4 102 -6 85 -19 -123 -89 -204 -242 -204 -386 0 -54 24 -148 53 -206 34 -69
      119 -155 190 -191 l63 -33 -54 -53 c-73 -74 -114 -164 -120 -266 -2 -43 -6
      -78 -8 -78 -2 0 -38 23 -79 51 -126 84 -343 178 -521 224 -7 2 -13 63 -17 177
      -7 194 -19 256 -73 359 -62 117 -153 205 -279 267 l-55 28 63 45 c149 108 218
      304 171 484 -56 216 -287 371 -499 336 -215 -34 -364 -183 -395 -394 -24 -165
      67 -362 207 -443 l44 -26 -73 -36 c-103 -51 -221 -169 -272 -272 -51 -105 -66
      -187 -66 -365 l0 -151 -72 -18 c-158 -40 -370 -132 -487 -210 -30 -20 -55 -35
      -55 -34 -1 2 -8 37 -14 78 -16 99 -59 185 -123 245 -27 26 -49 48 -47 49 2 2
      28 16 58 32 108 56 203 179 229 295 17 71 13 171 -9 242 -23 76 -88 176 -135
      213 -56 42 -39 51 103 56 107 4 139 9 202 33 223 83 381 267 426 495 62 315
      -131 637 -440 736 -91 29 -227 39 -315 23z"
      />
    </g>
  </svg>
);

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'>
      <div className='flex items-center gap-3'>
        <div className="flex items-center">
          <TeamIcon />
          <p onClick={() => navigate('/')} className='cursor-pointer font-semibold text-xl'>Hackhub</p>
        </div>
        <Dialog>
          <DialogTrigger>
            <Button variant='ghost'>New Project</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader >
              Create New Project
            </DialogHeader>
            <CreateProjectForm />
          </DialogContent>
        </Dialog>
        <Button variant='ghost' onClick={() => navigate('/upgrade_plan')}>Upgrade</Button>
      </div>

      <div className='flex gap-3 items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="icon" className="rounded-full border-2 border-gray-500">
              <User />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p >Code with bala</p>
      </div>
    </div>
  )
}

export default Navbar